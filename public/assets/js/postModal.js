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

    function postModal(event) {

        event.preventDefault();
        var postID = $(this).attr('id');
        console.log('This post\'s ID is ' + postID);
        return postID;

    }

    function updatePostLikes(event) {

        event.preventDefault();

        var postID = $(this).attr('value');
        var currentLikes = parseInt($(this).attr('data-name'));

        var updatedLikes = currentLikes + 1;
        var pathname = window.location.pathname;

        var updateUrl = '/posts/upVote/' + postID + '/' + updatedLikes;
        $.ajax({
            method: 'PUT',
            url: updateUrl
        }).then(function(response) {
            //These alerts/logs work
            alert(updateUrl);
            console.log(updateUrl);
            console.log(postID);
            console.log(updatedLikes);
        });

    }

    function updatePostDislikes(event) {

        event.preventDefault();

        var postID = $(this).attr('value');
        var currentDislikes = parseInt($(this).attr('data-name'));

        var updatedDislikes = currentDislikes + 1;
        var pathname = window.location.pathname;

        var updateUrl = '/api/posts/downVote/' + postID + '/' + updatedDislikes;

    }

    function categoryPage(event) {

        event.preventDefault();
        
        var categoryID = $(this).attr('id');
        // alert('Category ID: ' + categoryID);
    }

});
