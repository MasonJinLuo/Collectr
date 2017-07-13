//Author: Linette

$(document).ready(function() {

    var newEmail = $("#signUpEmail");
    var newPassword = $("#signUpPassword");
    var newUserImage = $("#newUserImage");
    var newUserDescription = $("#userDescription");
    var imageUpload = $("#imageUpload");
    var avatarUrl = $("#avatar-url");
    var reader = new FileReader();
    var checkedBox = [];

    (() => {
        document.getElementById("imageUpload").onchange = () => {
            const files = document.getElementById('imageUpload').files;
            const file = files[0];
            if (file == null) {
                return alert('No file selected.');
            }
            getSignedRequest(file);
        };
    })();

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

        var dataObject = new FormData();

        $("input[name='interest']:checked").each(function() {
            checkedBox.push(parseInt($(this).val()));
        });

        var interestString = checkedBox.join(',');
        newEmail = newEmail.val().trim();
        newPassword = newPassword.val().trim();
        avatarUrl = avatarUrl.val();
        newUserDescription = newUserDescription.val().trim();

        dataObject.append("email", newEmail);
        dataObject.append("password", newPassword);
        dataObject.append("image_path", avatarUrl);
        dataObject.append("description", newUserDescription);
        dataObject.append("interests", interestString);

        // console.log(avatarUrl.val());

        createNewUser(newEmail, newPassword, avatarUrl, newUserDescription, interestString);
    }

    function createNewUser(newEmail, newPassword, avatarUrl, newUserDescription, interestString) {
        var newUrl = avatarUrl.split('/').join('**');

        $.ajax({
            url: "/api/users" + "/" + newEmail + "/" + newPassword + "/" + newUrl + "/" + newUserDescription + "/" + interestString + "/",
            method: "POST",
            // data: JSON.stringify(newUserData),
            processData: false,
            contentType: false,
        }).done(function(data) {
            var interestArray = interestString.split(',');
            $("#signUpForm")[0].reset();
            $("#logInModal").modal("hide");

            for (var i = 0; i < interestArray.length; i++) {
                $.ajax({
                    url: '/secure/user/interests/' + interestArray[i],
                    method: 'POST'
                });
            }

            redirectDashboard();

        }).catch(function(data) {
            // alert(data.responseJSON.message);
            $("#signUpForm")[0].reset();
            newUserImage.attr("src", "");
            $('.nav-tabs a[href="#logIn"]').tab("show");
        });
    }

    function redirectDashboard() {
        window.location = '/secure/user';
    }

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
                    document.getElementById('newUserImage').src = url;
                    document.getElementById('avatar-url').value = url;
                } else {
                    alert('Could not upload file.');
                }
            }
        };
        xhr.send(file);
    }
});
