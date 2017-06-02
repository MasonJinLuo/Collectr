$(document).ready(function() {
$(document).on("click", "#searchGoButton", searchFunction);

function searchFunction(){
var searchInputField = $("#searchInputField").val().trim();
var queryURL = "/search/" + searchInputField;
window.location.href = queryURL;
}



});


