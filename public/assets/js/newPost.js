/*
    @author : Stacy
    @date : 
    @desc : 
*/

$(document).ready(function() {

    var description = $("#itemDescription");
    var tags = $("#itemTags");
    var newPostImage = $("#newPostImage");
    var category = $('#newPostCategory');

    var newPostForm = $("#newPostForm");
    var newPostModal = $("#newPostModal");
    var itemImageUpload = $("#itemImageUpload");

    //not functioning variables yet. Need sessions info to get current user
    var user;
    var owner = user;


    var reader = new FileReader();

    $(document).on("click", "#newPostSubmit", handleNewPostFormSubmit);

    //clears form if someone closes the modal before submitting
    $(document).on("click", "#newPostClose", clearImage);
    $(document).on("click", "#newPostModalCloseBtn", clearImage);

    function clearImage() {
        $("#newPostForm")[0].reset();
        newPostImage.attr("src", "");
    }

    function handleNewPostFormSubmit(event) {

        event.preventDefault();

        if (!description.val().trim()) {
            return alert("Please enter an item description");
        } else if (!tags.val().trim()) {
            return alert("Please enter item tags");
        } else if (!category.val()) {
            return alert("Please select a category");
        } else {

            var photo = itemImageUpload.get(0).files[0];
            var tagArray = (tags.val().trim().toLowerCase()).split(',');

            for (var i = 0; i < tagArray.length; i++) {
                tagArray[i] = tagArray[i].trim();
            }

            formData = new FormData();

            formData.append('photo', photo, photo.name);
            formData.append('description', description.val().trim());
            formData.append('category_id', category.val());

            var tagIdArray = [];
            var oldTagNameArray = [];
            var newTagNameArray = [];

            //checking to see if tags are currently in database
            var promises = [];

            for (var i = 0; i < tagArray.length; i++) {

                var tagName = tagArray[i];
                var promise = $.ajax({
                    url: "/tags/" + tagName,
                    method: 'GET'
                }).then(function(data) {

                    //if the tags exist they are pushed to an array
                    if (data) {
                        oldTagNameArray.push(data.name);
                    }

                });
                promises.push(promise);
            }
            $.when.apply(this, promises).then(function() {

                //comparing original tag array to preexisting tag array
                //push new tags to a new array
                for (var i = 0; i < tagArray.length; i++) {
                    console.log(tagArray[i]);
                    console.log(oldTagNameArray.indexOf(tagArray[i]));
                    if (oldTagNameArray.indexOf(tagArray[i]) == -1) {
                        newTagNameArray.push(tagArray[i]);

                    }
                }

                //adding values of new tag array to tags table
                for (var i = 0; i < newTagNameArray.length; i++) {
                    var newTagName = newTagNameArray[i];
                    $.ajax({
                        url: "/tags/" + newTagName,
                        method: "POST"
                    });
                }

                var promises2 = [];

                //get tag id values in an array for all of the tags
                //will need tag ids to query and post Post2Tags model and associate the new post to these tags
                for (var i = 0; i < tagArray.length; i++) {

                    var tagName = tagArray[i];
                    var promise2 = $.ajax({
                        url: "/tags/" + tagName,
                        method: 'GET'
                    }).then(function(data) {

                        tagIdArray.push(data.id);

                    });
                    promises2.push(promise2);
                }
                $.when.apply(this, promises2).then(function() {

                    //call function to create new post passing in post formdata and array of tag ids
                    createNewPost(formData, tagIdArray);
                });

            });

        }
    }

    function createNewPost(newPostData, tagIdArray) {
        $.ajax({

            url: "/api/secure/posts",
            method: "POST",
            data: newPostData,
            processData: false,
            contentType: false,

        }).done(function(data) {

            var newPostId = data.id;

            console.log(newPostId);
            console.log(tagIdArray);

            //will use post id and each tag id query/post post2tags
            for (var i = 0; i < tagIdArray.length; i++) {
                var tagID = tagIdArray[i];
                $.ajax({
                    url: '/post2tags/' + newPostId + '/' + tagID,
                    method: 'POST'

                });
            }

            alert("Post Added!");
            newPostForm[0].reset();
            newPostImage.attr("src", "");
            newPostModal.modal("hide");

            newPostModal.on('hidden.bs.modal', function() {
                location.reload();
            });

        });
    }

    //New User Upload Profile Picture

    itemImageUpload.change(function() {
        previewFile()
    });

    function previewFile() {
        var preview = document.querySelector("#newPostImage");
        var file = document.querySelector("#itemImageUpload").files[0];
        var reader = new FileReader();

        reader.onloadend = function() {
            preview.src = reader.result;
        }

        if (file) {
            reader.readAsDataURL(file);
        } else {
            preview.src = "";
        }
    }

});
