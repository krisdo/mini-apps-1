const express = require('express');
const path = require('path');
const fs = require('fs');
const port = 3000;
const app = express();

app.set('view engine', 'pug');
app.set('views', `${__dirname}/views`);


// app.use(express.static(path.join(__dirname,'client')));
app.use(express.static('client'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.listen(port, () =>{
  console.log( `listening ${port}`);
});



var convert = (report) => {

  var result = '';
  var array = [];
  
  //add keys first
  Object.keys(report).map( (element) => {
    if (element !== 'children') {
      if(element.includes('\,')) {
        array.push('\"' + element + '\"');
      } else {
        array.push(element);
      }
    }
  });

  //result is now a string of the joined elements in the array
  result = array.join();

  //start recursion
	var recursion = (obj) => {

    //reset result array to empty
    array = [];

    //iterate root object
      for (var key in obj) {
        //if the key is not children then add values to the array
        if (key !== "children") {
          if (typeof obj[key] === 'string' && obj[key].includes(',')) {
            array.push('\"' + obj[key] + '\"');
          } else {
            array.push(obj[key]);
          }
        }
      }
      
      //added the new joined array on the next line of string result
      result = result.concat('\n', array.join());
    
      //if there are children, recurse
    if (obj.children.length > 0) {
      for (var i = 0; i < obj.children.length; i++) {
         recursion(obj.children[i]);
      }	
    }
  };
  
	recursion(report);
  return result;
};

// app.get('/', (req, res) => {
  
//   // res.sendFile(__dirname + '/client/index.html');
  
// });

app.get('/upload_json',
  (req, res) => {
    res.render('/upload_json');
  });

app.post('/upload_json', (req, res) => {
 
  let report = convert(JSON.parse(req.body.sales));
  // fs.writeFile('csv_report.csv', report,  (err) =>{
  //   if (err) throw err;
  //   console.log('CSV file created!')
  // });
  
  res.render('csv', {report: `${report}`});
  // res.redirect('/'); 
});


// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))