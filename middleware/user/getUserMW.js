/**
 * Load a user from the database using the :userid param
 * The result is saved to res.locals.user
 */

<<<<<<< Updated upstream
module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.locals.umbrellas = [
            {
                _id: 'id1',
                name: 'Viharkabát.....',
                color: 'fekete',
                owner: 'Laci',
                room: 402
            },
            {
                _id: 'id2',
                name: 'Pinky',
                color: 'világoskék',
                owner: 'Noel',
                room: 1612
            },
            {
                _id: 'id3',
                name: 'SárgaVillanás',
                color: 'citromsárga',
                owner: 'Anna',
                room: 816
            }
        ];
        next();
=======
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const UserModel = requireOption(objectrepository, 'UserModel');

    return function(req, res, next) {
        UserModel.findOne({ _id: req.params.userid }, (err, user) => {
            if (err || !user) {
                return next(err);
            }

            res.locals.user = user;
            return next();
        });
>>>>>>> Stashed changes
    };
};