//Author: Linette

$(document).ready(function() {

    var newEmail = $("#signUpEmail");
    var newPassword = $("#signUpPassword");
    var newUserImage = $("#newUserImage");
    var newUserDescription = $("#userDescription");
    var imageUpload = $("#imageUpload")
    var reader = new FileReader();
    var checkedBox = [];

    //how to get/create a path for the user's profile picture

    $(document).on("click", "#signUpSubmit", handleNewUserFormSubmit);

    //clears form if someone closes the modal before submitting
    $(document).on("click", "#userPostClose", clearImage);
    $(document).on("click", "#userModalCloseBtn", clearImage);

    function clearImage() {
        $("#signUpForm")[0].reset();
        newUserImage.attr("src", "");
    }

    function handleNewUserFormSubmit(event) {

        event.preventDefault();
        // Don't do anything if the email field hasn't been filled out

        if (!newEmail.val().trim() || !newPassword.val().trim()) {
            return alert("Please enter an email address and password to sign up.")
        }

        if (newPassword.val().trim().length < 8 || newPassword.val().trim().length > 15) {
            return alert("Please enter a password between 8-15 characters.")
        }

        var formData = new FormData();

        var photo = imageUpload.get(0).files[0];

        $("input[name='interest']:checked").each(function() {
            checkedBox.push(parseInt($(this).val()));
        });

        var interestString = checkedBox.join(',');
        console.log(interestString);

        if (photo) {
            formData.append("photo", photo, photo.name);
        }

        formData.append("email", newEmail.val().trim());
        formData.append("password", newPassword.val().trim());
        formData.append("description", newUserDescription.val().trim());
        formData.append("interests", interestString);

        createNewUser(formData);

        redirectDashboard();

    }

    function createNewUser(newUserData) {
        $.ajax({
            url: "/api/users",
            method: "POST",
            data: newUserData,
            processData: false,
            contentType: false,
        }).done(function(data) {
            alert("Welcome to Collectr!");
            $("#signUpForm")[0].reset();
            $("#logInModal").modal("hide");
        }).catch(function(data) {
            alert(data.responseJSON.message);
            $("#signUpForm")[0].reset();
            newUserImage.attr("src", "");
            $('.nav-tabs a[href="#logIn"]').tab("show");
        });
    }

    //New User Upload Profile Picture

    imageUpload.change(function() {
        previewFile()
    });

    function previewFile() {
        var preview = document.querySelector("#newUserImage");
        var file = document.querySelector("#imageUpload").files[0];
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

    function redirectDashboard() {
        $.get('/secure/user').done(function(data) {
            window.location = '/secure/user';
        })
    }
});
