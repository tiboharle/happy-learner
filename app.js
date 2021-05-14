var createError = require('http-errors');
var express = require('express');
var nodemailer = require('nodemailer');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');
var mongoose = require('mongoose');
var indexRouter = require('./routes/index');
var homeRouter = require('./routes/home');
var achatRouter = require('./routes/achat');
require('dotenv').config({ path: '.env' });
var app = express();


// CONFIGURATION
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.DATABASE,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


// ROUTES
app.use('/', indexRouter);

app.use('/', homeRouter);

app.use('/achat', achatRouter);

// GESTION CAS PARITCULIERS
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


'use strict';

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: 'thibaut.devreact@gmail.com',
        pass: 'rzfejHvUy4EHnt115W'
    }
});
/* Le contenu du votre mail */
let mailOptions = {
    from: '"Harle Thibaut " <'thibaut.devreact@gmail.com'>,
    to: 'fredde.lgrd@email.com,
    subject: 'CA MARCHE !',
    text: 'Envoie du message de test',
    html: "<b>Bonjour </b>"
};
/* envoie du mail */
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s envoyé: %s', info.messageId, info.response);
});


module.exports = app;
