/**
 * Removes a umbrella from the database, the entity used here is: res.locals.umbrella
 * Redirects to /user/:userid after delete
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};