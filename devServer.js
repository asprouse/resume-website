var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');

var fs = require('fs');
var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/public', express.static('public'));

var resumePath = path.join(__dirname, '../resume/resume.json');
app.get('/resume.json', function(req, res) {
  res.sendFile(resumePath);
});

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'app', 'index.html'));
});

app.listen(3000, function(err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Listening at http://localhost:3000');
});
