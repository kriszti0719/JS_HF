/**
 * Load all umbrellas from the database
 * The result is saved to res.locals.umbrellas
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const UmbrellaModel = requireOption(objectrepository, 'UmbrellaModel');
    return function (req, res, next) {
<<<<<<< Updated upstream
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
        if (typeof res.locals.user === 'undefined') {
            UmbrellaModel.find({}, (err, umbrellas) => {
                if (err){
                    return next(err);
                }
                res.locals.umbrellas = umbrellas;
                return next();
            });
        }
        else {
            UmbrellaModel.find({_owner: res.locals.user._id}, (err, umbrellas) => {
                if (err){
                    return next(err);
                }
                res.locals.umbrellas = umbrellas;
                return next();
            });
        }
>>>>>>> Stashed changes
    };
};