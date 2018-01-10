var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var ejs = require('ejs');
var path = require('path');

app.set('views',path.join(__dirname + '/views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname + '/public')));

app.get('/', function (req, res) {
    res.render('index.ejs',{
        fullname: 'Tran Van Tien'
    });
});

app.listen(port);
console.log('server listen port', port);