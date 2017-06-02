$(document).ready(function() {
$(document).on("click", "#searchGoButton", searchFunction);

function searchFunction(){
var searchInputField = $("#searchInputField").val().trim();
	 var queryURL = "/search1/" + searchInputField;
	 console.log(queryURL)
	$.ajax({
  		url: queryURL,
  		method: "GET"
}).done(function(response) {
		console.log(response)

		queryURL = "/search2/" + searchInputField;
		console.log(queryURL)
		$.ajax({
		  	url: queryURL,
		  	method: "GET"
		}).done(function(response){
		  	console.log(response);
		  });


	});
}




});


