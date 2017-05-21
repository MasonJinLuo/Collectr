//Stacy

//Find all tags for a post
//Input post id you are searching for into function as postID
//Get back an array of tags for a post from this function

function getTagsForSinglePost(postID) {

    var postTagsArray = [];

    $.ajax({

        method: 'GET',
        url: '/api/tags/post/' + postID

    }).then(function(response) {

        for (var i = 0; i < response.length; i++) {

            postTagsArray.push(response[i].Tag.name);

        }

        console.log(postTagsArray);

    });

    return postTagsArray;
};