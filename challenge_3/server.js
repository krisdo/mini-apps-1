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
  // console.log(req.body);

  saveInfo(req.body, (id)=> {
    res.send({id});
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
    arrayVal.push(`"${obj[key]}"`);
    if(key !== 'id') {
      arrayDup.push(`${key} = "${obj[key]}"`);
    }  
  }
   var col = arrayCol.join(', ');
   var val = arrayVal.join(', ');
   var dup = arrayDup.join(', ');
  
  // let queryStr = `INSERT INTO account (key) VALUES (obj[key]) ON DUPLICATE KEY UPDATE key = obj[key]`
  let queryStr = `INSERT INTO account (${col}) VALUES (${val})`;
  connection.query(queryStr, (err, results, fields) => {
    if(err) {
      console.log(err);
    }
    cb(results.insertId);
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

