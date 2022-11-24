const express = require('express');
const app = express();
<<<<<<< Updated upstream
=======

app.set('view engine', 'ejs');
>>>>>>> Stashed changes

app.use(express.static('static'));

/** Load routing */
require('./route/index')(app);

app.listen(3000, function () {
    console.log('Hello :3000');
});