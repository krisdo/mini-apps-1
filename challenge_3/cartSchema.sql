CREATE DATABASE IF NOT EXISTS shoppingcart;

USE shoppingcart;

CREATE TABLE account (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  email VARCHAR(40) NOT NULL,
  password VARCHAR(30) NOT NULL

);

CREATE TABLE shipping (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  address VARCHAR(40) NOT NULL,
  phone VARCHAR(30) NOT NULL,
  account_id INT,
  FOREIGN KEY (account_id) REFERENCES account(id)
);


CREATE TABLE creditcard (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  card_number INT NOT NULL,
  expiry_date VARCHAR(30) NOT NULL,
  address VARCHAR(40) NOT NULL,
  phone VARCHAR(30) NOT NULL,
  account_id INT,
  FOREIGN KEY (account_id) REFERENCES account(id)

);


