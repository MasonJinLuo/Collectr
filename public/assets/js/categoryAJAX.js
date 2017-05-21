//Stacy

//Find all posts in a certain category
//Input category id you are searching for into function as categoryID
//Get back an array of objects (posts) from this function

function getPostsInCategory(categoryID) {

    var itemsInCategoryArray = [];

    $.ajax({

        method: 'GET',
        url: '/api/category/' + categoryID

    }).then(function(response) {

        for (var i = 0; i < response.length; i++) {

            itemsInCategoryArray.push(response[i]);

        }

    });

    return itemsInCategoryArray;

};

//Find all popular posts in a certain category
//Input category id you are searching for into function as categoryID
//Get back an array of objects (posts) from this function

function getPopularPostsInCategory(categoryID) {

    var popularArray = [];
    var upVotes = 0;
    var downVotes = 0;

    $.ajax({

        method: 'GET',
        url: '/api/category/' + categoryID

    }).then(function(response) {

        for (var i = 0; i < response.length; i++) {

            upVotes = parseInt(response[i].upVote);
            downVotes = parseInt(response[i].downVote);

            if (upVotes > downVotes) {

                popularArray.push(response[i]);

            }

        }

    });

    return popularArray;

};

//Find all new posts in a certain category
//Input category id you are searching for into function as categoryID
//Get back an array of objects (posts) from this function

function getNewPostsInCategory(categoryID) {

    var newArray = [];
    var upVotes = 0;
    var downVotes = 0;

    $.ajax({

        method: 'GET',
        url: '/api/category/' + categoryID

    }).then(function(response) {

        for (var i = 0; i < response.length; i++) {

            upVotes = parseInt(response[i].upVote);
            downVotes = parseInt(response[i].downVote);

            if (upVotes === 0 && downVotes === 0) {

                newArray.push(response[i]);

            }

        }

    });

    return newArray;

};
