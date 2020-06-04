DROP DATABASE IF EXISTS shopping;

CREATE DATABASE shopping;

USE shopping;

CREATE TABLE account (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30),
  email VARCHAR(40),
  password VARCHAR(30),
  line1 VARCHAR(40),
  line2 VARCHAR(40),
  city VARCHAR(40) ,
  state VARCHAR(20),
  zipcode INT,
  phone INT,
  cc INT,
  doe VARCHAR(30),
  cvv INT,
  billing_zip INT 
 
);
