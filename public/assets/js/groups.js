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

var category_set = [
    [0,1,2,3],
    [4,5,6,7],
    [8,9,10,11],
    [12,13,14,15]
];

var group_names = ['apparel','toys','body','history'];

var postsByGroup = new Map();

var usersByGroup = new Map();

function getUserById(userID){
    var user = null;
       $.ajax({
            method: 'GET',
            url: "/api/users/" + userID
        }).then(function(response) {
            user = response;
        });
    return user;
}

function getAllPostsInCategory(categoryID) {
        var posts = [];
        $.ajax({
            method: 'GET',
            url: '/api/category/' + categoryID

        }).then(function(response) {
            for (var post in response) { 
                posts.push(post);
            }      
        });
        return posts;
}

function createPostSet(){
    var index = 0;
    for(var s in category_set){
        index += 1;
        var postSet = new Set();
        var userSet = new Set();
        var userids = new Set();
        for(var category in s){
            for(var post in getAllPostsInCategory(category)){
                postSet.add(post);
                userids.add(post.owner_id);
            }
        }
        for (let userid of userids){
                userSet.add(getUserById(userid));
        }
        usersByGroup.set(group_names[index],userSet);
        postsByGroup.set(group_names[index],postSet);
    }
}



