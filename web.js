var express = require('express');
var app = express();
var server = app.listen(process.env.PORT || 5000, function () {
  app.use('/', express.static('dist'));
});
