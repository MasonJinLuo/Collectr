// Author: Mason & Linette

$(document).ready(function() {
    var loginEmail = $("#loginEmail");
    var loginPassword = $("#loginPassword");

    $(document).on("click", "#loginSubmit", handleLoginSubmit);

    function handleLoginSubmit(event){
     event.preventDefault();

    if (!loginEmail.val().trim() || !loginPassword.val().trim()) {
          return alert("Please enter an email address and password to log in.")
    }
      loginCheck({
        email: loginEmail.val().trim(),
        password: loginPassword.val().trim()
      });
    }

    function loginCheck(userData){
        $.post("/api/login", userData).done(function(data) {
              alert ("Welcome back, " + loginEmail.val().trim() + "!");
              $("#loginForm")[0].reset();
              $("#logInModal").modal("hide");
          }).catch(function() {
              alert("username/password combination is incorrect or does not exist");
              $("#loginForm")[0].reset();
          })
        };
    });