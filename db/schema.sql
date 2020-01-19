### Schema

CREATE TABLE `heroku_2e2cb7e01d6da89`.`burger`
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	eaten BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

SELECT * FROM `heroku_2e2cb7e01d6da89`.`burger`