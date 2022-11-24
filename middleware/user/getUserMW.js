/**
 * Load all umbrellas from the database
 * The result is saved to res.locals.umbrellas
 */

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
    };
};