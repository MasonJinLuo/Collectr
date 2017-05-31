// author mason
$(document).ready(function() {
var loginEmail = $("#loginEmail");
var loginPassword = $("#loginPassword");

$(document).on("click", "#loginSubmit", handleLoginSubmit);


function handleLoginSubmit (event){
 event.preventDefault();

if (!loginEmail.val().trim() || !loginPassword.val().trim()) {
      return alert("Please enter an email address and password to sign up.")
      }

    var formData = new FormData();
        formData.append('email', loginEmail.val().trim());
        formData.append('password', loginPassword.val().trim());

  loginCheck();
}


function loginCheck (){
$.ajax({
  url: "/api/users",
  method: "GET"
}).done(function(response) {
  console.log(response)
  for( var i=0; i < response.length; i++){
     console.log(response[i].email);
     console.log(response[i].password);
    if ((loginEmail.val().trim() === response[i].email) && (loginPassword.val().trim() === response[i].password)){
      console.log("logged on");
      return;
    }else{
      console.log("username/password combination is incorrect or does not exist")
    }
  }
});
}


});
