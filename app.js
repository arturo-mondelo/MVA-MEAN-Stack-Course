//

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/App'));     //serve static assets
app.get('*', function(req, res) {
    res.sendfile('./App/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

app.listen(port, function() {
    console.log('Listening on ' + port);
});