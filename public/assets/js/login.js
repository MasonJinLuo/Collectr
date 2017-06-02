// Author: Mason & Linette

$(document).ready(function() {
    var loginEmail = $("#loginEmail");
    var loginPassword = $("#loginPassword");

    $(document).on("click", "#loginSubmit", handleLoginSubmit);

    $(document).on("click", "#logout", handleLogout);


    function handleLoginSubmit(event){
     event.preventDefault();

    if (!loginEmail.val().trim() || !loginPassword.val().trim()) {
          return alert("Please enter an email address and password to log in.")
    }
      loginCheck({
        email: loginEmail.val().trim(),
        password: loginPassword.val().trim()
      });

    redirectDashboard();

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

    function handleLogout() {
        $.get("/api/secure/logout").done(function(data) {
              window.location = '/';
        }).catch(function() {
              alert("Logout Unsuccessful. Please try again.");
        })
    }

    function redirectDashboard() {
         $.get('/secure/user').done(function(data) {
            window.location = '/secure/user';
         })
    }

});

