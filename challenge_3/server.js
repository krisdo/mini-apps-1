const express = require('express');
const app = express();
const mysql = require('mysql');
const mongoose = require('mongoose');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const port = 3000;
app.listen(port, () => console.log(`listening to ${port}`));


app.post('/accounts', (req, res) => {
  saveInfo(req.body, (err, id)=> {
    if(id) {
    res.send({id});
    }
  });
});

app.post('/summary', (req, res) => {

  const id = req.body.id;
   getInfo(id, (err, results)=> {

    res.send(results[0]);
  });

});

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'shopping'
})

const saveInfo = (obj,cb) => {
  var arrayCol = [];
  var arrayVal = [];
  var arrayDup = [];

  for(var key in obj) {
    arrayCol.push(key);
    if(obj[key] === null) {
      arrayVal.push(`${obj[key]}`);
      if(key !== 'id') {
        arrayDup.push(`${key} = ${obj[key]}`);
      }
    } else {
      arrayVal.push(`"${obj[key]}"`);
      if(key !== 'id') {
        arrayDup.push(`${key} = "${obj[key]}"`);
      }
    }
  }
   var col = arrayCol.join(', ');
   var val = arrayVal.join(', ');
   var dup = arrayDup.join(', ');
  
   let queryStr = `INSERT INTO account (${col}) VALUES (${val}) ON DUPLICATE KEY UPDATE ${dup}`;
  connection.query(queryStr, (err, results, fields) => {
    if(err) {
    cb(err, null);
    }
    if(results) {
      cb(null, results.insertId);

    }
  });
};

const getInfo = (id, cb) => {

  let queryStr = `SELECT * FROM account WHERE id = ${id};`;
  connection.query(queryStr, (err, results, fields) => {
   if(err) {
    cb(err, null);
   }
   if(results) {
    cb(null, results);
   }
 });
};

// mongoose.connect(`mongodb://localhost/shoppingcart`, { useUnifiedTopology: true, useNewUrlParser: true })
// .then( ()=>console.log('Connected to Mongoose'))
// .catch((err) => console.log(`DB connection error ${err}`));

// var accountSchema = mongoose.Schema({
//   name: String,
//   email: String,
//   password: String
// })

// var Account = mongoose.model('Account', accountSchema);

// var add = (info) => {

//   return Account.create({
//     name: info.name, 
//     email: info.email, 
//     password: info.password})
//   .then( (res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
// };

// add({name: 'test', email: 'test@test.com', password: 'test'});

