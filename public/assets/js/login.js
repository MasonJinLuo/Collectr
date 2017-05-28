//Author: Linette
// var collectrdb = require("../models")

$(document).ready(function() {
  var newEmail = $("#signUpEmail");
  var newPassword = $("#signUpPassword");
  var newUserImage = $("#newUserImage");
  var newUserDescription = $("#userDescription");
  var reader  = new FileReader();

  //how to get/create a path for the user's profile picture

  $(document).on("click", "#loginSubmit", handleNewUserFormSubmit);

    function handleNewUserFormSubmit(event) {
	  event.preventDefault();
	  // Don't do anything if the email field hasn't been filled out
	  if ($('#loginEmail').val() == "" || $("#loginPassword").val().toString() == "") { // this query was fixed by mason
     	alert("Please enter an email address and password to sign up")
      } else {
        check();
        // login()
        //input link here
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


// function check (){ //this function was added by mason

// var loginEmail = $("#loginEmail").val().toString().toLowerCase();
// var loginPassword = $("#loginPassword").val().toString();

// collectrdb.user.findOne({
//   where: {
//     email: loginEmail,
//     password: loginPassword
//   }
// }).then(function(response){
//   console.log(response)
//     //set
//   }).catch(function (err){
//   console.log(err)
// });

// }


// function login() {
//     $.get("/login", check);
//   }

function check(){
  window.location.href = "/login";
}