const renderMW = require('../middleware/renderMW');

const delUmbrellaMW = require('../middleware/umbrella/delUmbrellaMW');
const getUmbrellaMW = require('../middleware/umbrella/getUmbrellaMW');
const getUmbrellasMW = require('../middleware/umbrella/getUmbrellasMW');
const saveUmbrellaMW = require('../middleware/umbrella/saveUmbrellaMW');

const delUserMW = require('../middleware/user/delUserMW');
const getUserMW = require('../middleware/user/getUserMW');
const getUsersMW = require('../middleware/user/getUsersMW');
const saveUserMW = require('../middleware/user/saveUserMW');

module.exports = function (app) {
    const objectRepository = {};

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

<<<<<<< Updated upstream:route/index.js
    app.get('/umbrella/:umbrellaid',
=======
    app.get('/user/data/:userid',
        getUserMW(objectRepository),
        getUmbrellasMW(objectRepository),
        renderMW(objectRepository, 'user'));

    app.get('/user/list',
        getUsersMW(objectRepository),
        renderMW(objectRepository, 'users'));

    app.get('/umbrella/:userid/new',
>>>>>>> Stashed changes:route/routes.js
        getUmbrellaMW(objectRepository),
        renderMW(objectRepository, 'addUmbrella'));

    app.use('/umbrella/:userid/edit/:umbrellaid',
        getUserMW(objectRepository),
        getUmbrellaMW (objectRepository),
        saveUmbrellaMW(objectRepository),
        renderMW(objectRepository,'editUmbrella'));

    app.get('/umbrella/:userid/delete/:umbrellaid',
        getUmbrellaMW(objectRepository),
        delUmbrellaMW(objectRepository));

    app.get('/umbrella/:umbrellaid',
        getUmbrellaMW(objectRepository),
        renderMW(objectRepository, 'umbrella'));

    app.use('/',
        getUmbrellasMW(objectRepository),
        renderMW(objectRepository, 'index'));
};