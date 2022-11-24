const express = require('express');
const app = express();
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======

app.set('view engine', 'ejs');
>>>>>>> Stashed changes
=======
const bodyParser = require('body-parser');
>>>>>>> Stashed changes

app.set('view engine', 'ejs');

app.use(express.static('static'));

<<<<<<< Updated upstream
/** Load routing */
require('./route/routes')(app);
=======
app.use((err, req,res,next)=>{
    res.end('Something went wrong...');
    console.log(err);
})
>>>>>>> Stashed changes

app.listen(3000, function () {
    console.log('Hello :3000');
});