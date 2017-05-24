//Author: Linette

$(document).ready(function() {
  var newEmail = $("#signUpEmail");
  var newPassword = $("#signUpPassword");
  var newUserImage = $("#newUserImage");
  var newUserDescription = $("#userDescription");
  var reader  = new FileReader();

  //how to get/create a path for the user's profile picture

  $(document).on("click", "#modal-submit", handleNewUserFormSubmit);

    function handleNewUserFormSubmit(event) {
	  event.preventDefault();
	  // Don't do anything if the email field hasn't been filled out
	  if (!newEmail.val().trim().trim() || !newPassword.val().trim().trim()) {
     	return alert("Please enter an email address and password to sign up")
      }

      createNewUser({
      	email: newEmail.val().trim(),
      	password: newPassword.val().trim(),
      	// image_path: newEmail.val().trim(),
      	description: newUserDescription.val().trim()
      })
      	
	}

	function createNewUser(newUserData) {
		$.post("/api/users", newUserData)
			.then(function(data) {
        alert("Welcome to Collectr!");
        newEmail.val("");
        newPassword.val("");
        newUserDescription.val("");
        newUserImage.attr("src", "");
        reader.abort();
        // $("#logInModal").attr("style", "display:none")
        // $(".modal-open").attr("class", "")
        // $(".modal-backdrop fade in").attr("class", "")
      })
	}

  //New User Upload Profile Picture

  var reader  = new FileReader();

    $("#imageUpload").change(function() {previewFile()});

     function previewFile() {
         var preview = document.querySelector("#newUserImage");
         var file    = document.querySelector("input[type=file]").files[0];
         var reader  = new FileReader();

         reader.onloadend = function () {
             preview.src = reader.result;
         }

         if (file) {
             reader.readAsDataURL(file);
         } else {
             preview.src = "";
         }
    }
});