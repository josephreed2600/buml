require('dotenv').config();
const express = require('express');
const routes = require('./routes/routes');


const app = express();
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');






app.get('/', routes.index);

app.listen(process.env.PORT);