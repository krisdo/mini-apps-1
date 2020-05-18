const express = require('express');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
// const middleware = require('./middleware');

const port = 5501;
const app = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'client/uploads')
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}.json`)
  }
})
const upload = multer({storage: storage});

app.set('view engine', 'pug');
app.set('views', `${__dirname}/views`);

// app.use(express.static(path.join(__dirname,'client')));
app.use(express.static('client'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(middleware.downloadFile);
// app.use(middleware.fileConversion);

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

app.get('/upload_json', (req, res) => {
  res.render('csv');
});

app.post('/upload_json', upload.single('sales'), (req, res) => {
// app.post('/upload_json', (req, res) => {
  var csvData;
  // res.render('csv');
  // res.end();

// const readFilePromise = (path, encode) => {
//   return new Promise ((resolve, reject) =>{
//     fs.readFile(path, encode, (err, data) => {
//       if (err) reject(err);
//       resolve(data);
//     })
//   });
// };

// readFilePromise(req.file.path, 'utf8')
// .then(result => {
//   return convert(JSON.parse(result));
// })
// .then( result1 => {
//   fs.writeFile(`${req.file.destination}/report.csv`, result, (err) => {
//     if (err) throw err; });
//   // console.log('result1 ', result1)
//   // return result1;
// })
// .then( (result2) =>{
//   console.log(result2);
//   res.render('csv');
// })
// .then(res.end())
// .catch( (err) => {
//   if (err) throw err;
// });
  fs.readFile(req.file.path, 'utf8', (err, data ) => {
    if(err) throw err;
    // console.log(data);
    csvData =  convert(JSON.parse(data));
    
    fs.writeFile(`${req.file.destination}/report.csv`, csvData, (err) => {
      if(err) throw err;
       console.log('It works!');
       res.send(csvData);
      })
      
    })
    //code before AJAX
    // res.end();
    // res.redirect('/upload_json')
  // res.render('csv', {report: report});
  // res.render('csv', {report: `${csvData}`});
  
});


// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))