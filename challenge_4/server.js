const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('./client/dist'));

app.listen(3001, () => {
  console.log('Listening at 3001');
})
