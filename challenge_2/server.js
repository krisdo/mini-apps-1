const express = require('express');
const path = require('path');
const port = 3000;
const app = express();

app.use(express.static(path.join(__dirname,'client')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () =>{
  console.log( `listening ${port}`);
});

app.get('/', (req, res) => {
  
  // res.sendFile(__dirname + '/client/index.html');
  
 
});

app.post('/upload_json', (req, res) => {
  // if (err) throw err;
 var body = JSON.stringify(req.body)
  // body.split('\"');
  console.log(body);
});


// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))