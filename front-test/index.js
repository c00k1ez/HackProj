const logger = require('morgan');
const sassMiddleware = require('node-sass-middleware');
const express = require('express');
const path = require("path");
const app = express();
const http = require('http');
const server = http.createServer(app);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(sassMiddleware({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: true, // true = .sass and false = .scss
    sourceMap: true
}));
app.get('/test', function(req, res, next) {
    res.render('./index', { title: 'Auth' });
});
app.get('/play', function(req, res, next) {
    res.render('./play', { artist: 'Auth',title:"" });
});
app.get('/b1', function(req, res, next) {
    res.render('./b1', { title: 'Auth' });
});
app.get('/b2', function(req, res, next) {
    res.render('./b2', { title: 'Auth' });
});
app.get('/b3', function(req, res, next) {
    res.render('./b3', { author: 'Auth',title:"kek",bpm:120,mode:"relax" });
});
app.get('/b4', function(req, res, next) {
    res.render('./b4', { title: 'Auth' });
});
app.get('/b5', function(req, res, next) {
    res.render('./b5', { title: 'Auth' });
});
app.get('/b6', function(req, res, next) {
    res.render('./b6', { artist: 'Auth',title:"" });
});

app.use(express.static(path.join(__dirname, 'public')));
server.listen(process.env.PORT || 3000,'0.0.0.0', () => console.log('Example app listening on port 3000!'));