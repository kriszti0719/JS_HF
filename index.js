const express = require('express');
const app = express();
<<<<<<< Updated upstream
=======
const bodyParser = require('body-parser');
>>>>>>> Stashed changes

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static('static'));
app.set('view engine', 'ejs');

// Load routing
require('./route/routes')(app);

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

/*const UserModel = require('./models/user');
const UmbrellaModel = require('./models/umbrella');

let oneUser = new UserModel();
oneUser.name='Nagy László';
oneUser.nick='Laci';
oneUser.room=402;
oneUser.table='Jobb, hátsó';
oneUser.admin=true;
oneUser.save((err)=>{
    console.log(err);

    let oneUmbrella = new UmbrellaModel();
    oneUmbrella.name='Viharkabát';
    oneUmbrella.room=oneUser.room;
    oneUmbrella.color='fekete';
    oneUmbrella.owner=oneUser.nick;
    oneUmbrella._owner=oneUser;
    oneUmbrella.save((err)=>{
        console.log(err);
    })
});*/