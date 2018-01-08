var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.use('/assets', express.static('assets'));

app.get('/home', function (req, res) {
    res.render('home');
});

app.get('/users/google', function (req, res) {
    res.render('logged');
});


app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});