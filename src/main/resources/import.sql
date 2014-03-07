insert into group_article (group_id, name) values (1, 'test group 1');
insert into group_article (group_id, name) values (2, 'test group 2');
insert into group_article (group_id, name) values (3, 'test group 3');

insert into category (category_id, name, group_id) values (10, 'test category 10', 1)
insert into category (category_id, name, group_id) values (11, 'test category 11', 2)
insert into category (category_id, name, group_id) values (12, 'test category 12', 2)
insert into category (category_id, name, group_id) values (13, 'test category 13', 2)

insert into article (article_id, title, description, category_id) values (1, 'test title 1', 'test description 1', 10);
insert into article (article_id, title, description, category_id) values (2, 'test title 2', 'test description 2', 11);

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


insert into comment(comment_id, content, article_id) values (601, 'comment test 601 of 1 article', 1);
insert into comment(comment_id, content, article_id) values (602, 'comment test 602 of 2 article', 2);
insert into comment(comment_id, content, article_id) values (603, 'comment test 603 of 2 article', 2);
insert into comment(comment_id, content, article_id) values (604, 'comment test 604 of 2 article', 2);


