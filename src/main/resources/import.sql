insert into group_article (group_id, name) values (1, 'Test group 1');
insert into group_article (group_id, name) values (2, 'Test group 2');
insert into group_article (group_id, name) values (3, 'Test group 3');

insert into category (category_id, name, group_id) values (10, 'Test test category 10', 1)
insert into category (category_id, name, group_id) values (11, 'Test category 11', 2)
insert into category (category_id, name, group_id) values (12, 'Test test category 12', 2)
insert into category (category_id, name, group_id) values (13, 'Test test   category 13', 2)

insert into article (article_id, title, notice, image, description, category_id) values (1, 'Test title 1', 'test article notice 1', '2.jpg', 'test description 1', 10);
insert into article (article_id, title, notice, image, description, category_id) values (2, 'Test title 2', 'test article notice 2', '2.jpg', 'test description 2', 10);
insert into article (article_id, title, notice, image, description, category_id) values (3, 'Test title 3', 'test article notice 3', '2.jpg', 'test description 3', 10);
insert into article (article_id, title, notice, image, description, category_id) values (4, 'Test title 4', 'test article notice 4', '2.jpg', 'test description 4', 10);
insert into article (article_id, title, notice, image, description, category_id) values (5, 'Test title 5', 'test article notice 5', '2.jpg', 'test description 5', 11);
insert into article (article_id, title, notice, image, description, category_id) values (6, 'Test title 6', 'test article notice 6', '2.jpg', 'test description 6', 11);
insert into article (article_id, title, notice, image, description, category_id) values (7, 'Test title 7', 'test article notice 7', '2.jpg', 'test description 7', 11);
insert into article (article_id, title, notice, image, description, category_id) values (8, 'Test title 8', 'test article notice 8', '2.jpg', 'test description 8', 11);
insert into article (article_id, title, notice, image, description, category_id) values (9, 'Test title 9', 'test article notice 9', '2.jpg', 'test description 9', 11);
insert into article (article_id, title, notice, image, description, category_id) values (10, 'Test title 10', 'test article notice 10', '2.jpg', 'test description 10', 11);

insert into person (person_id, email) values (300, 'zinjvi.test@gmail.com');
insert into person (person_id, email) values (301, 'zinjvi.test@gmail.com');
insert into person (person_id, email) values (302, 'zinjvi.test@gmail.com');
insert into person (person_id, email) values (303, 'zinjvi.test@gmail.com');
insert into person (person_id, email) values (304, 'zinjvi.test@gmail.com');
insert into person (person_id, email) values (305, 'zinjvi.test@gmail.com');
insert into person (person_id, email) values (306, 'zinjvi.test@gmail.com');
insert into person (person_id, email) values (307, 'zinjvi.test@gmail.com');
insert into person (person_id, email) values (308, 'zinjvi.test@gmail.com');
insert into person (person_id, email) values (309, 'zinjvi.test@gmail.com');

insert into subscription(subscription_id, person_id, article_id, discriminator) values (500, 300, 1, 'A')
insert into subscription(subscription_id, person_id, article_id, discriminator) values (501, 300, 2, 'A')
insert into subscription(subscription_id, person_id, category_id, discriminator) values (502, 301, 10, 'C')
insert into subscription(subscription_id, person_id, category_id, discriminator) values (503, 302, 10, 'C')
insert into subscription(subscription_id, person_id, category_id, discriminator) values (504, 303, 10, 'C')
insert into subscription(subscription_id, person_id, category_id, discriminator) values (505, 304, 10, 'C')
insert into subscription(subscription_id, person_id, category_id, discriminator) values (506, 305, 10, 'C')
insert into subscription(subscription_id, person_id, category_id, discriminator) values (507, 306, 10, 'C')
insert into subscription(subscription_id, person_id, category_id, discriminator) values (508, 307, 10, 'C')
insert into subscription(subscription_id, person_id, category_id, discriminator) values (509, 308, 10, 'C')


insert into comment(comment_id, content, article_id) values (601, 'Comment test test test test test test test test test test test test test test test test 601 of 1 article', 1);
insert into comment(comment_id, content, article_id) values (602, 'Comment test test test test test test test test test test test test test test test test test test test test test 602 of 2 article', 2);
insert into comment(comment_id, content, article_id) values (603, 'Comment test test test test test test test test test test test test test test test 603 of 2 article', 2);
insert into comment(comment_id, content, article_id) values (604, 'Comment test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test 604 of 2 article', 2);


