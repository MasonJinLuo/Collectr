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

insert into users (email, password, image_path, description, interests) values ('GearHeadForLife', 'password', '/images/users/male1.jpg', 'Hey, I\'m Marcus. Born and raised in Los Angelos California, dreaming of the day I can move to New York City. I have a massive collection of maps and I love anything historical. Hit me up!!', '2, 7, 14');
insert into users (email, password, image_path, description, interests) values ('Jeff_Is_Da_Man', 'password', '/images/users/male2.jpg', '', '');
insert into users (email, password, image_path, description, interests) values ('MusicFan_79', 'password', '/images/users/male3.jpg', '', '');
insert into users (email, password, image_path, description, interests) values ('Wookie1977', 'password', '/images/users/male4.jpg', '', '');

insert into users (email, password, image_path, description, interests) values ('AllAboutThatBass', 'password', '/images/users/female1.jpg', '', '');
insert into users (email, password, image_path, description, interests) values ('Tiny_Dancer_2', 'password', '/images/users/female2.jpg', '', '');
insert into users (email, password, image_path, description, interests) values ('GreatGatsby', 'password', '/images/users/female3.jpg', '', '');
insert into users (email, password, image_path, description, interests) values ('NyanCat', 'password', '/images/users/female4.jpg', '', '');


insert into posts (img_path, description, owner_id, user_id, category_id) values ('http://esq.h-cdn.co/assets/16/44/1478275003-straight-lace-shoes.jpg', 'Check out my post!', 4, 2, 3);

insert into posts (img_path, description, owner_id, user_id, category_id) values ('https://coins.thefuntimesguide.com/files/lincoln-cent-varieties.png', 'It\'s a penny!', 1, 1, 2);

insert into posts (img_path, description, owner_id, user_id, category_id) values ('https://m.media-amazon.com/images/G/01/6pm/landing/2017/shoes/April/Pumps._V530666631_.jpg', 'Dat orange stuff tho', 2, 3, 3);

insert into posts (img_path, description, owner_id, user_id, category_id) values ('http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/2v/dp/p02vdpfn.jpg', 'My Favorite Book!', 3, 1, 1);

insert into posts (img_path, description, owner_id, user_id, category_id) values ('https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/10cts1879.jpg/280px-10cts1879.jpg', 'testing!', 4, 1, 2);

insert into posts (img_path, description, owner_id, user_id, category_id) values ('http://www.brooklynpogs.com/img/pog-foil.jpg', 'Check out my Dino pog!', 6, 6, 4);

insert into posts (img_path, description, owner_id, user_id, category_id) values ('http://www.brooklynpogs.com/img/pog-slug1.jpg', 'So Cool!!!', 6, 6, 4);

insert into posts (img_path, description, owner_id, user_id, category_id) values ('http://cdn.bulbagarden.net/upload/8/8b/NinetalesBaseSet12.jpg', 'Ninetails is the best!', 5, 5, 5);


insert into tags (name) values ('cute');
insert into tags (name) values ('cool');
insert into tags (name) values ('wow');
insert into tags (name) values ('punk');
insert into tags (name) values ('vintage');
insert into tags (name) values ('classic');
insert into tags (name) values ('new');
insert into tags (name) values ('style');

insert into post2tags (post_id, tag_id) values (3, 4);
insert into post2tags (post_id, tag_id) values (3, 2);
insert into post2tags (post_id, tag_id) values (3, 1);

insert into post2tags (post_id, tag_id) values (1, 3);
insert into post2tags (post_id, tag_id) values (2, 1);
insert into post2tags (post_id, tag_id) values (2, 1);