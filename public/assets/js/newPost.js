/*
    @author : Stacy
    @date : 
    @desc : 
*/

$(document).ready(function() {

    var description = $("#itemDescription");
    var tags = $("#itemTags");
    var newPostImage = $("#newPostImage");
    var newPostForm = $("#newPostForm");
    var newPostModal = $("#newPostModal");
    var reader = new FileReader();

    $(document).on("click", "#newPostSubmit", handleNewPostFormSubmit);

    function handleNewPostFormSubmit(event) {

        event.preventDefault();

        var photo = $("#imageUpload").get(0).files[0];
        formData = new FormData();

        formData.append('photo', photo, photo.name);
        formData.append('description', description.val().trim());
        formData.append('tags', tags.val().trim());

        console.log(formData);

        createNewPost(formData);
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

    $("#imageUpload").change(function() { previewFile() });

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
