/*
    @author : Stacy
    @date : 
    @desc : 
*/

$(document).ready(function() {

	$(document).on('click', '.item-img-div', postModal);
	$(document).on('click', '#likeBtn', updatePostLikes);
	$(document).on('click', '#dislikeBtn', updatePostDislikes);
    $(document).on('click', '.category-tab', categoryPage);
    
    function postModal() {

    	event.preventDefault();
        var postID = $(this).attr('id');
        console.log('This post\'s ID is ' + postID);
        return postID;

    }

    function updatePostLikes(postID){
    	event.preventDefault();

    }

    function updatePostDislikes(postID){
    	event.preventDefault();
    	
    }

    function categoryPage(){
        var categoryID = $(this).attr('id');
        // alert('Category ID: ' + categoryID);
    }

});
