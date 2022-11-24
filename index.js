var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.use(express.static('static'));

<<<<<<< Updated upstream
var server = app.listen(3000, function () {
    console.log("On: 3000")
=======
/** Load routing */
require('./route/routes')(app);

app.listen(3000, function () {
    console.log('Hello :3000');
>>>>>>> Stashed changes
});