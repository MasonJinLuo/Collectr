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
    var postUrl = $("#post-url");
    var img_path;
    var category_id;

    var newPostForm = $("#newPostForm");
    var newPostModal = $("#newPostModal");
    var itemImageUpload = $("#itemImageUpload");

    var reader = new FileReader();

    (() => {
        document.getElementById("itemImageUpload").onchange = () => {
            const files = document.getElementById('itemImageUpload').files;
            const file = files[0];
            if (file == null) {
                return alert('No file selected.');
            }
            getSignedRequest(file);
        };
    })();

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

            // var photo = itemImageUpload.get(0).files[0];
            var tagArray = (tags.val().trim().toLowerCase()).split(',');

            for (var i = 0; i < tagArray.length; i++) {
                tagArray[i] = tagArray[i].trim();
            }

            var formData = new FormData();

            formData.append('img_path', postUrl.val());
            formData.append('description', description.val().trim());
            formData.append('category_id', category.val());

            description = description.val().trim();
            category_id = category.val();
            img_path = postUrl.val();
            console.log(img_path);

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
                    createNewPost(description, category_id, img_path, tagIdArray);
                });

            });

        }
    }

    function createNewPost(description, category_id, img_path, tagIdArray) {
        var newUrl = img_path.split("/").join('**');

        $.ajax({

            url: "/api/secure/posts/" + description + "/" + category_id + "/" + newUrl + "/",
            method: "POST",
            // data: newPostData,
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

            //            alert("Post Added!");
            newPostForm[0].reset();
            newPostImage.attr("src", "");
            newPostModal.modal("hide");

            newPostModal.on('hidden.bs.modal', function() {
                location.reload();
            });

        });
    }

    //New User Upload Profile Picture

    // itemImageUpload.change(function() {
    //     previewFile()
    // });

    // function previewFile() {
    //     var preview = document.querySelector("#newPostImage");
    //     var file = document.querySelector("#itemImageUpload").files[0];
    //     var reader = new FileReader();

    //     reader.onloadend = function() {
    //         preview.src = reader.result;
    //     }

    //     if (file) {
    //         reader.readAsDataURL(file);
    //     } else {
    //         preview.src = "";
    //     }
    // }

    function getSignedRequest(file) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `/sign-s3?file-name=${encodeURIComponent(file.name)}&file-type=${file.type}`);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    const response = JSON.parse(xhr.responseText);
                    uploadFile(file, response.signedRequest, response.url);
                } else {
                    alert('Could not get signed URL.');
                }
            }
        };
        xhr.send();
    }

    function uploadFile(file, signedRequest, url) {
        const xhr = new XMLHttpRequest();
        xhr.open('PUT', signedRequest);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    document.getElementById('newPostImage').src = url;
                    document.getElementById('post-url').value = url;
                } else {
                    alert('Could not upload file.');
                }
            }
        };
        xhr.send(file);
    }

});
