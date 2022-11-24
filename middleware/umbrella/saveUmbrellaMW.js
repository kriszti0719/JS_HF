/**
 * Using POST params update or save an umbrella to the database
 * If res.locals.umbrella is there, it's an update otherwise this middleware creates an entity
 * Redirects to /user/:userid after success
 */

const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const UmbrellaModel = requireOption(objectrepository, 'UmbrellaModel');

    return function(req, res, next) {
        if (
            typeof req.body.name === 'undefined' ||
            typeof req.body.color === 'undefined' ||
            typeof res.locals.user === 'undefined'
        ) {
            return next();
        }

        if (typeof res.locals.umbrella === 'undefined') {
            res.locals.umbrella = new UmbrellaModel();
        }

        res.locals.umbrella.name = req.body.name;
        res.locals.umbrella.color = req.body.color;
        res.locals.umbrella.room = res.locals.user.room;
        res.locals.umbrella.owner = res.locals.user.nick;
        res.locals.umbrella._owner = res.locals.user._id;


        res.locals.umbrella.save(err => {
            if (err) {
                return next(err);
            }
            return res.redirect(`/user/data/${res.locals.user._id}`);
        });
    };
};