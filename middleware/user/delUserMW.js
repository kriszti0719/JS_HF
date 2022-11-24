/**
 * Removes a user from the database, the entity used here is: res.locals.user
 * Redirects to /user/list after delete
 */

module.exports = function (objectrepository) {
    return function (req, res, next) {
//        res.locals.user.delete();
//        res.redirect('/user/list');
        next();
    };
};