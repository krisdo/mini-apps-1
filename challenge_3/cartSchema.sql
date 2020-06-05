DROP DATABASE IF EXISTS shopping;

CREATE DATABASE shopping;

USE shopping;

CREATE TABLE account (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  email VARCHAR(40) NOT NULL,
  password VARCHAR(30) NOT NULL,
  line1 VARCHAR(40) NULL,
  line2 VARCHAR(40) NULL,
  city VARCHAR(40) NULL,
  state VARCHAR(20) NULL,
  zipcode INT NULL,
  phone INT NULL,
  cc INT NULL,
  doe VARCHAR(30) NULL,
  cvv INT NULL,
  billing_zip INT NULL
 
);
