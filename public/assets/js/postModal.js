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

        var postID = $(this).attr('id');
        console.log('This post\'s ID is ' + postID);

    }

    function updatePostLikes() {

        var postID = $(this).attr('value');
        var currentLikes = parseInt($(this).attr('data-name'));

        var updatedLikes = currentLikes + 1;
        var pathname = window.location.pathname;

        var updateUrl = '/posts/upVote/' + postID + '/' + updatedLikes;
        
        $.ajax({
            method: 'PUT',
            url: updateUrl
        }).then(function(response) {
            console.log('Updated likes for post ' + postID);
        });

    }

    function updatePostDislikes() {

        var postID = $(this).attr('value');
        var currentDislikes = parseInt($(this).attr('data-name'));

        var updatedDislikes = currentDislikes + 1;
        var pathname = window.location.pathname;

        var updateUrl = '/posts/downVote/' + postID + '/' + updatedDislikes;
        
        $.ajax({
            method: 'PUT',
            url: updateUrl
        }).then(function(response) {
            console.log('Updated dislikes for post ' + postID);
        });

    }

    function categoryPage() {
        
        var categoryID = $(this).attr('id');
        // alert('Category ID: ' + categoryID);
    }

});
