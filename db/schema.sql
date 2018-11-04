CREATE DATABASE krusty_krab_db;
USE krusty_krab_db;

CREATE TABLE krusty_menu
(
	id int NOT NULL AUTO_INCREMENT,
	krusty_item_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);