/**
 * Using POST params update or save an umbrella to the database
 * If res.locals.umbrella is there, it's an update otherwise this middleware creates an entity
 * Redirects to /user/:userid after success
 */

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};