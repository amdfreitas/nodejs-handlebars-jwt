const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const consign = require('consign');


app.engine('handlebars',handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


consign({
    cwd:'src',
    locale: 'pt-br',
    logger: console,
    verbose: true,
    extensions: [ '.js', '.json','.handlebars' ],
    loggingType: 'info'
    })
    .include('db')
    .then('controller')
    .then('models')
    .then('routes')
    .into(app);



module.exports = app;