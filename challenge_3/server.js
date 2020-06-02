const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const port = 3000;
app.listen(port, () => console.log(`listening to ${port}`));

