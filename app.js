const express = require('express');

var app = express();

app.use(express.static(dir('public')))
app.use('/images', express.static(dir('res/img')));
app.use('/js', express.static(dir('res/javascript')));
app.get('/',(req, res) => {
    res.sendFile(dir('public/index.html'), {root:dir('public')});
});

app.listen(4000, '127.0.0.1');
function dir(path) {
    return `${__dirname}/${path}`;
}