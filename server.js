var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/Article-one', function (req, res) {
  res.send('Article-One requested and displayed here');
});

app.get('/Article-Two', function (req, res) {
  res.send('Article-Two requested and displayed here');
});

app.get('/Article-Three', function (req, res) {
  res.send('Article-Three requested and displayed here');
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/prijeev.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'prijeev.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
