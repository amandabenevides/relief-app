const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')

const app = express();
const cors = require('cors');

app.use(cors());

mongoose.connect('mongodb+srv://royaller:GCssv8aG1EfLjnvQ@cluster0.qrjpe.mongodb.net/covidaid?retryWrites=true&w=majority', {
useNewUrlParser:true, 
useUnifiedTopology:true
});

app.use(express.json());
app.use(routes);

app.listen(3333);