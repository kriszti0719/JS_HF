/**
 * Load all users from the database
 * The result is saved to res.locals.users
 */

module.exports = function (objectrepository) {
    return function (req, res, next) {
<<<<<<< Updated upstream

        res.locals.users = [
            {
                _id: 'id1',
                name: 'Nagy László',
                room: '402',
                admin: 'y'
            },
            {
                _id: 'id2',
                name: 'Benkő Noel',
                room: '1612',
                admin: 'n'
            },
            {
                _id: 'id3',
                name: 'Árvai Anna',
                room: '816',
                admin: 'n'
            },
            {
                _id: 'id4',
                name: 'Vágvölgyi Anita',
                room: '1213',
                admin: 'y'
            }
        ];

        next();
=======
        UserModel.find({}, (err, users) => {
            if (err){
                return next(err);
            }
            res.locals.users = users;
            return next();
        });
>>>>>>> Stashed changes
    };
};