/**
 * Removes an umbrella from the database, the entity used here is: res.locals.umbrella
 * Redirects to /user/:userid after delete
 */

const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        if (typeof res.locals.umbrella === 'undefined') {
            return next();
        }

        res.locals.umbrella.remove(err => {
            if (err) {
                return next(err);
            }

            return res.redirect(`/user/data/${res.locals.user._id}`);
        });
    };
};