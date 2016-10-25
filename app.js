/*global require*/
const express = require('express');
const session = require('express-session');
const path = require('path');
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');
const ROOT = path.resolve(process.cwd(), '.');
const passport = require('passport');
const auth = require('./src/auth');

const app = express();
app.set('trust proxy', 1);// trust first proxy
app.use(session({
    name             : "con-id",
    secret           : 'keyboard cat',
    resave           : false,
    saveUninitialized: true
}));
app.set('views', path.join(ROOT, '/views'));
app.set('view engine', 'html');
app.engine('html', ejs.__express);
app.set('layout', 'layout');
app.use(expressLayouts);

app.use(passport.initialize());
app.use(passport.session());

app.get('/login',
    function (req, res) {
        res.render('login.html')
    });
app.get('/success', function (req, res) {
    res.render('success.html')
});
app.post('/login',
    passport.authenticate('wt-pro', {failureRedirect: '/login'}),
    function (req, res) {
        res.redirect('/');
    });
app.get('/auth/wt-pro', passport.authenticate('wt-pro', {scope: ['email']}));
app.get('/auth/wt-pro/callback',
    passport.authenticate('wt-pro', {failureRedirect: '/login'}),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/success');
    });
app.get('/',
    function (req, res) {
        res.render('index.html');
    });

const PORT = 8700;
app.listen(PORT, function (err) {
    if (!err) {
        console.log(`wt-pro-open-consumer Listening on ${PORT}`);
    }
});