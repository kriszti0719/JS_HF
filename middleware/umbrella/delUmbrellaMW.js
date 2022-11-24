/**
 * Removes an umbrella from the database, the entity used here is: res.locals.umbrella
 * Redirects to /user/:userid after delete
 */

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};