// apparel ['shoes','hats','']
// body-modification ['']
// toys ['']
// music ['']
// history ['']


/*
    @author: anupsawant
    @date: may 30th 2017
    @desc: functions to group the posts
*/

function getAllPostsInCategory(categoryID) {

        var posts = [];

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


