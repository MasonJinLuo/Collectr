insert into Categories (name) values ('Books');
insert into Categories (name) values ('Coins');
insert into Categories (name) values ('Shoes');
insert into Categories (name) values ('Pogs');
insert into Categories (name) values ('Cards');
insert into Categories (name) values ('Cameras');
insert into Categories (name) values ('CDs');
insert into Categories (name) values ('Vinyls');
insert into Categories (name) values ('Cars');
insert into Categories (name) values ('Stamps');
insert into Categories (name) values ('Maps');
insert into Categories (name) values ('Typewriters');
insert into Categories (name) values ('Mirrors');
insert into Categories (name) values ('Ceramic Bowls');
insert into Categories (name) values ('Travel Mugs');
insert into Categories (name) values ('Shotglasses');
insert into Categories (name) values ('Keychains');
insert into Categories (name) values ('Record Players');

insert into users (email, password, image_path, description) values ('John@gmail.com', 'johnisawesome', 'http://media.istockphoto.com/photos/happy-laughing-man-picture-id544358212?k=6&m=544358212&s=612x612&w=0&h=odURMNz2hty8LIfpVahaaUKpGU4vd-UlZx4jy-OAnJA=', 'cool me');

insert into users (email, password, image_path, description) values ('Henry@gmail.com', 'hernyiscool', 'https://ak3.picdn.net/shutterstock/videos/5956364/thumb/1.jpg', 'I rock');

insert into users (email, password, image_path, description) values ('Jessica@gmail.com', 'iAmJessica', 'https://ak9.picdn.net/shutterstock/videos/13165172/thumb/1.jpg', 'Hello my fellow collectors!');

insert into users (email, password, image_path, description) values ('Courtney@gmail.com', 'thisIsPassword', 'https://unlockingfemininity.files.wordpress.com/2010/02/istocksmilingblackwoman.jpeg', 'The coolest');

insert into users (email, password, image_path, description) values ('Taylor@gmail.com', 'taylorIsCool9', 'https://st2.depositphotos.com/2069237/5494/v/450/depositphotos_54948979-stock-video-man-texting-sms.jpg', 'Hello Dolly!');

insert into users (email, password, image_path, description) values ('Bethany@gmail.com', 'thisIsTheBestPassword', 'http://cdn-img.essence.com/sites/default/files/styles/3x2_xs/public/images/2012/06/21/happy-woman-2.jpg?itok=pdluy-iE', 'I love life!');



insert into posts (img_path, description, owner_id, user_id, category_id) values ('http://esq.h-cdn.co/assets/16/44/1478275003-straight-lace-shoes.jpg', 'Check out my post!', 4, 2, 3);

insert into posts (img_path, description, owner_id, user_id, category_id) values ('https://coins.thefuntimesguide.com/files/lincoln-cent-varieties.png', 'FACEBOOK!', 1, 1, 2);

insert into posts (img_path, description, owner_id, user_id, category_id) values ('https://m.media-amazon.com/images/G/01/6pm/landing/2017/shoes/April/Pumps._V530666631_.jpg', 'Dat orange stuff tho', 2, 3, 3);

insert into posts (img_path, description, owner_id, user_id, category_id) values ('http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/2v/dp/p02vdpfn.jpg', 'CATS!', 3, 1, 1);

insert into posts (img_path, description, owner_id, user_id, category_id) values ('https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/10cts1879.jpg/280px-10cts1879.jpg', 'testing!', 4, 1, 2);


insert into posts (img_path, description, owner_id, user_id, category_id) values ('http://www.brooklynpogs.com/img/pog-foil.jpg', 'Check out my Dino pog!', 6, 6, 4);

insert into posts (img_path, description, owner_id, user_id, category_id) values ('http://www.brooklynpogs.com/img/pog-slug1.jpg', 'So Cool!!!', 6, 6, 4);


insert into posts (img_path, description, owner_id, user_id, category_id) values ('http://cdn.bulbagarden.net/upload/8/8b/NinetalesBaseSet12.jpg', 'Ninetails is the best!', 5, 5, 5);
insert into posts (img_path, description, owner_id, user_id, category_id) values ('http://cdn.bulbagarden.net/media/upload/a/a4/VenusaurBaseSet15.jpg', 'Leaf Power!!', 5, 5, 5);
insert into posts (img_path, description, owner_id, user_id, category_id) values ('http://cdn.bulbagarden.net/media/upload/a/a5/ExeggutorJungle35.jpg', 'So eggy, so weird', 5, 5, 5);


insert into posts (img_path, description, owner_id, user_id, category_id) values ('http://cdn.thecoolist.com/wp-content/uploads/2016/04/Canonet-G-III-QL17-vintage-camera-960x636.jpg', 'Classic Cannon', 4, 3, 6);

insert into posts (img_path, description, owner_id, user_id, category_id) values ('http://cdn.thecoolist.com/wp-content/uploads/2016/04/Lubitel-2-vintage-camera-960x643.jpg', 'This was my grandpa\'s favorite', 1, 4, 6);


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