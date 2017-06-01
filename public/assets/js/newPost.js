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

            console.log(category.val());

            var photo = itemImageUpload.get(0).files[0];

            formData = new FormData();

            formData.append('photo', photo, photo.name);
            formData.append('description', description.val().trim());
            // formData.append('tags', tags.val().trim());
            formData.append('category_id', 1);
            formData.append('owner_id', 1);
            formData.append('user_id', 1);

            createNewPost(formData);
        }
    }

    function createNewPost(newPostData) {
        $.ajax({

            url: "/api/posts",
            method: "POST",
            data: newPostData,
            processData: false,
            contentType: false,

        }).done(function(data) {

            alert("Post Added!");
            newPostForm[0].reset();
            newPostImage.attr("src", "");
            newPostModal.modal("hide");

        });
    }

    //New User Upload Profile Picture

    itemImageUpload.change(function() { previewFile() });

    function previewFile() {
        var preview = document.querySelector("#newPostImage");
        var file = document.querySelector("input[type=file]").files[0];
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
