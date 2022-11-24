const express = require('express');
const app = express();
<<<<<<< Updated upstream
=======

app.set('view engine', 'ejs');
>>>>>>> Stashed changes

app.set('view engine', 'ejs');

app.use(express.static('static'));

/** Load routing */
require('./route/routes')(app);

app.listen(3000, function () {
    console.log('Hello :3000');
});