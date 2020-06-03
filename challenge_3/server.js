const express = require('express');
const app = express();
const mysql = require('mysql');
const mongoose = require('mongoose');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const port = 3000;
app.listen(port, () => console.log(`listening to ${port}`));

// let connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'student',
//   password: 'student',
//   database: 'shoppingcart'
// })
// let queryStr = 'DESCRIBE account'
// connection.query(queryStr, (err, results, fields) => {
//   console.log(results);
// })

mongoose.connect(`mongodb://localhost/shoppingcart`, { useUnifiedTopology: true, useNewUrlParser: true })
.then( ()=>console.log('Connected to Mongoose'))
.catch((err) => console.log(`DB connection error ${err}`));

var accountSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String
})

var Account = mongoose.model('Account', accountSchema);

var add = (info) => {

  return Account.create({
    name: info.name, 
    email: info.email, 
    password: info.password})
  .then( (res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
};

add({name: 'test', email: 'test@test.com', password: 'test'});

