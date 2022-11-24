/**
 * Removes a user from the database, the entity used here is: res.locals.user
 * Redirects to /user/list after delete
 */

/**Ezt csak megírtam, de végül nem lett használva*/

const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        if (typeof res.locals.user === 'undefined') {
            return next();
        }

        res.locals.user.remove(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/user/list');
        });
    };
};