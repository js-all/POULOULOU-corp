const express = require('express');

var app = express();

app.use(express.static(dir('public')))
app.use('/res', express.static(dir('res')));
app.get('/',(req, res) => {
    res.sendFile(dir('public/index.html'), {root:dir('public')});
});

app.listen(4000);
function dir(path) {
    return __dirname + '/'+path;
}