/**
 * Load a user from the database using the :userid param
 * The result is saved to res.locals.user
 */

module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.locals.user = {
            _id: 'id1',
            name: 'Nagy László',
            nname: 'Laci',
            room: '402',
            table: 'Jobb, első',
            admin: 'y'
        };
        next();
    };
};