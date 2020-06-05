DROP DATABASE IF EXISTS shopping;

CREATE DATABASE shopping;

USE shopping;

CREATE TABLE account (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  email VARCHAR(40),
  password VARCHAR(30),
  line1 VARCHAR(40),
  line2 VARCHAR(40),
  city VARCHAR(40) ,
  state VARCHAR(20),
  zipcode INT NULL,
  phone INT NULL,
  cc INT NULL,
  doe VARCHAR(30) NULL,
  cvv INT NULL,
  billing_zip INT NULL
 
);
