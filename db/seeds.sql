insert into Categories (name) values ('Stamps');
insert into Categories (name) values ('Maps');
insert into Categories (name) values ('Coins');
insert into Categories (name) values ('Books');

insert into Categories (name) values ('Cards');
insert into Categories (name) values ('Video Games');
insert into Categories (name) values ('Action Figures');
insert into Categories (name) values ('Board Games');

insert into Categories (name) values ('Shoes');
insert into Categories (name) values ('Hats');
insert into Categories (name) values ('Watches');
insert into Categories (name) values ('Bags');

insert into Categories (name) values ('Instruments');
insert into Categories (name) values ('Recordings');
insert into Categories (name) values ('Memorabilia');
insert into Categories (name) values ('Audio Gear');

insert into users (email, password, image_path, description, interests) values ('GearHeadForLife', 'password', '/images/users/male1.jpg', 'Hey, I\'m Marcus. Born and raised in Los Angelos California, dreaming of the day I can move to New York City. I have a massive collection of maps and I love anything historical. Hit me up!!', '2,7,14');

insert into users2categories (category_id, user_id) values (2, 1);
insert into users2categories (category_id, user_id) values (7, 1);	
insert into users2categories (category_id, user_id) values (14, 1);	

insert into users (email, password, image_path, description, interests) values ('Jeff_Is_Da_Man', 'password', '/images/users/male2.jpg', 'I have a passion for music and the finer things in life. My favorites are Frank Sinatra, Sammy David Jr, and John Legend. I love to listen to old tunes and be carried away by nostalgia', '6,10,13,14,15');

insert into users2categories (category_id, user_id) values (6, 2);
insert into users2categories (category_id, user_id) values (10, 2);	
insert into users2categories (category_id, user_id) values (13, 2);	
insert into users2categories (category_id, user_id) values (14, 2);	
insert into users2categories (category_id, user_id) values (15, 2);


insert into users (email, password, image_path, description, interests) values ('MusicBookFan_79', 'password', '/images/users/male3.jpg', 'My user name pretty much says it all. I enjoy fresh beats and great reads. I\'ve been living a blessed life so far, and I\'m looking to find some people with similar collection interests!', '1,3,4');
insert into users (email, password, image_path, description, interests) values ('Wookie1977', 'password', '/images/users/male4.jpg', 'Ready are you? What know you of ready? For eight hundred years have I trained Jedi. My own counsel will I keep on who is to be trained. A Jedi must have the deepest commitment, the most serious mind. This one, a long time have I watched. All his life has he looked away… to the future, to the horizon', '5,6,14');

insert into users (email, password, image_path, description, interests) values ('AllAboutThatBass', 'password', '/images/users/female1.jpg', 'I\'m a Minnesota girl who loves spending time with her friends and family. I have three fur babies (Huskies!) who accompany my husband and I on every camping trip. I\'m a nerd at heart and I enjoy all things Marvel!', '5,6,8');
insert into users (email, password, image_path, description, interests) values ('Tiny_Dancer_2', 'password', '/images/users/female2.jpg', 'Major history buff Veronica here. I very much enjoy Eurpoean history and all things related to the Tang Dynasty', '1,2,3');
insert into users (email, password, image_path, description, interests) values ('GreatGatsby', 'password', '/images/users/female3.jpg', 'Hello all, I\'m Camile. I am a personal shopper at Nordstrom and I enjoy getting to spend my time surrounded by high fashion and cool people. In my free time I am lead guitarist for my neighborhood band \'Groots Galaxy\'', '9,10,11,12');
insert into users (email, password, image_path, description, interests) values ('NyanCatTsum', 'password', '/images/users/female4.jpg', 'Total music nerd here! I have a big personality and I love smiling (Smiling\'s my favorite). Let\'s be friends!!!!', '15,5,4');


insert into posts (img_path, description, upVote, downVote, owner_id, user_id, category_id) values ('/images/postImages/stamp1.png', 'Argentina Stamp!', 34, 1, 1, 1, 1);
insert into posts (img_path, description, upVote, downVote, owner_id, user_id, category_id) values ('/images/postImages/map1.jpg', 'From My Original Collection', 187, 5, 1, 1, 2);
insert into posts (img_path, description, upVote, downVote, owner_id, user_id, category_id) values ('/images/postImages/guitar1.jpg', 'My Fender, My Pride and Joy', 200, 3, 2, 2, 13);
insert into posts (img_path, description, upVote, downVote, owner_id, user_id, category_id) values ('/images/postImages/audioGear1.jpg', 'Set Up Down At WX97', 35, 6, 2, 2, 16);

insert into posts (img_path, description, upVote, downVote, owner_id, user_id, category_id) values ('/images/postImages/coin1.jpg', 'Leo V, Dumbarton Oaks', 10, 2, 3, 3, 3);
insert into posts (img_path, description, upVote, downVote, owner_id, user_id, category_id) values ('/images/postImages/book1.jpg', '<3 Forever Favorite', 176, 4, 3, 3, 4);
insert into posts (img_path, description, upVote, downVote, owner_id, user_id, category_id) values ('/images/postImages/card1.jpg', 'Nidoran (f)', 75, 1, 4, 4, 5);
insert into posts (img_path, description, upVote, downVote, owner_id, user_id, category_id) values ('/images/postImages/videoGame1.jpg', 'Sad To Part With This', 350, 45, 4, 4, 6);	


insert into posts (img_path, description, upVote, downVote, owner_id, user_id, category_id) values ('/images/postImages/actionFigure1.jpg', 'Superman Making His Rounds', 176, 14, 5, 5, 7);
insert into posts (img_path, description, upVote, downVote, owner_id, user_id, category_id) values ('/images/postImages/boardGame1.jpg', 'Perfect Ladies\' Night!! <3', 15, 1, 5, 5, 8);
insert into posts (img_path, description, upVote, downVote, owner_id, user_id, category_id) values ('/images/postImages/shoe1.jpg', 'All About These Sperrys!', 3, 0, 6, 6, 9);
insert into posts (img_path, description, upVote, downVote, owner_id, user_id, category_id) values ('/images/postImages/hat1.jpg', 'My Sister\'s New Hat', 75, 2, 6, 6, 10);

insert into posts (img_path, description, upVote, downVote, owner_id, user_id, category_id) values ('/images/postImages/watch1.jpg', 'Love That Wrapping Style', 3, 0, 7, 7, 11);
insert into posts (img_path, description, upVote, downVote, owner_id, user_id, category_id) values ('/images/postImages/bag1.jpg', 'Saw This At Nordstrom', 63, 4, 7, 7, 12);
insert into posts (img_path, description, upVote, downVote, owner_id, user_id, category_id) values ('/images/postImages/recordings1.jpg', 'Best Album of All Time', 243, 34, 8, 8, 14);
insert into posts (img_path, description, upVote, downVote, owner_id, user_id, category_id) values ('/images/postImages/memorabilia1.jpg', 'Violent Femmes Rock My Socks', 134, 21, 8, 8, 15);	

insert into tags (name) values ('cute');
insert into tags (name) values ('cool');
insert into tags (name) values ('wow');
insert into tags (name) values ('punk');
insert into tags (name) values ('vintage');
insert into tags (name) values ('classic');
insert into tags (name) values ('new');
insert into tags (name) values ('style');

insert into tags (name) values ('hip hop');
insert into tags (name) values ('rare');
insert into tags (name) values ('1940s');
insert into tags (name) values ('nike');
insert into tags (name) values ('puma');
insert into tags (name) values ('fiction');
insert into tags (name) values ('rolex');
insert into tags (name) values ('head phones');

insert into tags (name) values ('usa');
insert into tags (name) values ('concert');
insert into tags (name) values ('ticket');
insert into tags (name) values ('vinyl');
insert into tags (name) values ('CD');
insert into tags (name) values ('cassette');
insert into tags (name) values ('monopoly');
insert into tags (name) values ('pokemon');

insert into tags (name) values ('baseball');
insert into tags (name) values ('soccer');
insert into tags (name) values ('gucci');
insert into tags (name) values ('ipod');
insert into tags (name) values ('guitar');
insert into tags (name) values ('drums');
insert into tags (name) values ('speaker');
insert into tags (name) values ('fedora');




insert into post2tags (post_id, tag_id) values (9, 6);
insert into post2tags (post_id, tag_id) values (9, 2);

insert into post2tags (post_id, tag_id) values (10, 7);
insert into post2tags (post_id, tag_id) values (10, 3);

insert into post2tags (post_id, tag_id) values (11, 8);
insert into post2tags (post_id, tag_id) values (11, 6);

insert into post2tags (post_id, tag_id) values (12, 1);
insert into post2tags (post_id, tag_id) values (12, 8);

insert into post2tags (post_id, tag_id) values (13, 1);
insert into post2tags (post_id, tag_id) values (13, 8);

insert into post2tags (post_id, tag_id) values (14, 1);
insert into post2tags (post_id, tag_id) values (14, 2);

insert into post2tags (post_id, tag_id) values (15, 6);
insert into post2tags (post_id, tag_id) values (15, 20);

insert into post2tags (post_id, tag_id) values (16, 18);
insert into post2tags (post_id, tag_id) values (16, 5);


insert into post2tags (post_id, tag_id) values (1, 5);
insert into post2tags (post_id, tag_id) values (1, 2);

insert into post2tags (post_id, tag_id) values (2, 5);
insert into post2tags (post_id, tag_id) values (2, 10);

insert into post2tags (post_id, tag_id) values (3, 29);
insert into post2tags (post_id, tag_id) values (3, 3);

insert into post2tags (post_id, tag_id) values (4, 31);
insert into post2tags (post_id, tag_id) values (4, 2);

insert into post2tags (post_id, tag_id) values (5, 10);
insert into post2tags (post_id, tag_id) values (5, 6);

insert into post2tags (post_id, tag_id) values (6, 14);
insert into post2tags (post_id, tag_id) values (6, 6);

insert into post2tags (post_id, tag_id) values (7, 24);
insert into post2tags (post_id, tag_id) values (7, 1);

insert into post2tags (post_id, tag_id) values (8, 6);
insert into post2tags (post_id, tag_id) values (8, 3);