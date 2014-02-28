-- insert into group (group_id, name) values (1, 'test group 1')
-- insert into group (group_id, name) values (2, 'test group 2')

-- insert into category (category_id, name) values (1, 'test category 1')
-- insert into category (category_id, name) values (2, 'test category 2')


insert into person (person_id, email) values (100, 'zinjvi.test@gmail.com');
insert into person (person_id, email) values (200, 'zinjvi.test@gmail.com');

insert into article (article_id, title, description) values (1, 'test title 1', 'test description 1');
insert into article (article_id, title, description) values (2, 'test title 2', 'test description 2');

insert into subscription(subscription_id, person_id, article_id, discriminator) values (10, 100, 1, 'A')
insert into subscription(subscription_id, person_id, article_id, discriminator) values (20, 200, 2, 'A')



