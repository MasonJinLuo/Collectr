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
    $(document).on('click', '#collectPostSubmit', collectPostInfo);

    function collectPostInfo(event) {

        event.preventDefault();

        //Collecting form and other info needed for new post creation
        var description = $('#itemCollectDescription').val().trim();
        var category_id = $(this).attr('data-category');
        var owner_id = $(this).attr('data-owner');
        var img_path = $(this).attr('data-img');

        //the way I am passing the image path in an ajax call I only want the name of the image itself and not the whole path
        var imageArray = img_path.split('/');
        var imageArrayLength = imageArray.length;

        var imageLocation = imageArray[imageArrayLength - 1];

        //taking tags comma-delimited string and making a tags array
        var tags = $('#collectItemTags').val().trim().toLowerCase();
        var tagArray = tags.split(',');
        for (var i = 0; i < tagArray.length; i++) {
            tagArray[i] = tagArray[i].trim();
        }

        var tagIdArray = [];
        var oldTagNameArray = [];
        var newTagNameArray = [];

        //checking to see if tags are currently in database
        var promises = [];

        for (var i = 0; i < tagArray.length; i++) {

            var tagName = tagArray[i];
            var promise = $.ajax({
                url: "/tags/" + tagName,
                method: 'GET'
            }).then(function(data) {

                //if the tags exist they are pushed to an array
                if (data) {
                    oldTagNameArray.push(data.name);
                }

            });
            promises.push(promise);
        }
        $.when.apply(this, promises).then(function() {

            //comparing original tag array to preexisting tag array
            //push new tags to a new array
            for (var i = 0; i < tagArray.length; i++) {
                console.log(tagArray[i]);
                console.log(oldTagNameArray.indexOf(tagArray[i]));
                if (oldTagNameArray.indexOf(tagArray[i]) == -1) {
                    newTagNameArray.push(tagArray[i]);

                }
            }

            //adding values of new tag array to tags table
            for (var i = 0; i < newTagNameArray.length; i++) {
                var newTagName = newTagNameArray[i];
                $.ajax({
                    url: "/tags/" + newTagName,
                    method: "POST"
                });
            }

            var promises2 = [];

            //get tag id values in an array for all of the tags
            //will need tag ids to query and post Post2Tags model and associate the new post to these tags
            for (var i = 0; i < tagArray.length; i++) {

                var tagName = tagArray[i];
                var promise2 = $.ajax({
                    url: "/tags/" + tagName,
                    method: 'GET'
                }).then(function(data) {

                    tagIdArray.push(data.id);

                });
                promises2.push(promise2);
            }
            $.when.apply(this, promises2).then(function() {

                //call function to create new post passing in tagsID array and all info needed for a new post
                createNewPost(tagIdArray, description, category_id, owner_id, imageLocation);
            });

        });
    }

    function createNewPost(tagIdArray, description, category_id, owner_id, imageLocation) {

        //need to grab userID from sessions storage
        var user_id = 1;

        var collectUrl = '/collect/' + description + '/' + imageLocation + '/' + user_id + '/' + owner_id + '/' + category_id;

        $.ajax({
            url: collectUrl,
            method: 'POST'
        }).done(function(data) {
            //get id of newly created post
            //need this for query to post2tags
            var newPostId = data.id;

            console.log(newPostId);
            console.log(tagIdArray);

            //will use post id and each tag id to query/post post2tags
            for (var i = 0; i < tagIdArray.length; i++) {
                var tagID = tagIdArray[i];
                $.ajax({
                    url: '/post2tags/' + newPostId + '/' + tagID,
                    method: 'POST'

                });
            }

            alert("Post Added!");
            $('#collectPostForm')[0].reset();
            $('#openCollectModal').modal("hide");

        });

    }

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
