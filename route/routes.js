const renderMW = require('../middleware/renderMW');

const delUmbrellaMW = require('../middleware/umbrella/delUmbrellaMW');
const getUmbrellaMW = require('../middleware/umbrella/getUmbrellaMW');
const getUmbrellasMW = require('../middleware/umbrella/getUmbrellasMW');
const saveUmbrellaMW = require('../middleware/umbrella/saveUmbrellaMW');

const delUserMW = require('../middleware/user/delUserMW');
const getUserMW = require('../middleware/user/getUserMW');
const getUsersMW = require('../middleware/user/getUsersMW');
const saveUserMW = require('../middleware/user/saveUserMW');

<<<<<<< Updated upstream
module.exports = function (app) {
    const objectRepository = {};

    app.use('/',
        getUmbrellasMW(objectRepository),
        renderMW(objectRepository, 'index'));

    app.get('/user/list',
        getUsersMW(objectRepository),
        renderMW(objectRepository, 'users'));

    app.get('/user/:userid',
        getUserMW(objectRepository),
        getUmbrellasMW(objectRepository),
        renderMW(objectRepository, 'user'));
=======
const UserModel = require('../models/user');
const UmbrellaModel = require('../models/umbrella');

module.exports = function (app) {
    const objectRepository = {
        UserModel: UserModel,
        UmbrellaModel: UmbrellaModel
    };
>>>>>>> Stashed changes

    app.use('/user/new',
        saveUserMW(objectRepository),
        renderMW(objectRepository, 'addUser'));

    app.use('/user/edit/:userid',
        getUserMW(objectRepository),
        saveUserMW(objectRepository),
        renderMW(objectRepository,'editUser'));

    app.get('/user/delete/:userid',
        getUserMW(objectRepository),
        delUserMW(objectRepository));

<<<<<<< Updated upstream
    app.get('/user/umbrella/:umbrellaid',
        getUmbrellaMW(objectRepository),
        renderMW(objectRepository, 'addUmbrella'));

    app.use('/umbrella/edit/:userid/:umbrellaid',
=======
    app.get('/user/data/:userid',
        getUserMW(objectRepository),
        getUmbrellasMW(objectRepository),
        renderMW(objectRepository, 'user'));

    app.get('/user/list',
        getUsersMW(objectRepository),
        renderMW(objectRepository, 'users'));

    app.use('/umbrella/:userid/new',
        getUserMW(objectRepository),
        saveUmbrellaMW(objectRepository),
        renderMW(objectRepository, 'addUmbrella'));

    app.use('/umbrella/:userid/edit/:umbrellaid',
>>>>>>> Stashed changes
        getUserMW(objectRepository),
        getUmbrellaMW (objectRepository),
        saveUmbrellaMW(objectRepository),
        renderMW(objectRepository,'editUmbrella'));

<<<<<<< Updated upstream
    app.get('/umbrella/delete/:userid',
        getUmbrellaMW(objectRepository),
        delUmbrellaMW(objectRepository));
=======
    app.get('/umbrella/:userid/delete/:umbrellaid',
        getUserMW(objectRepository),
        getUmbrellaMW(objectRepository),
        delUmbrellaMW(objectRepository));

    app.get('/umbrella/:umbrellaid',
        getUserMW(objectRepository),
        getUmbrellaMW(objectRepository),
        renderMW(objectRepository, 'umbrella'));

    app.get('/',
        getUmbrellasMW(objectRepository),
        renderMW(objectRepository, 'index'));
>>>>>>> Stashed changes
};