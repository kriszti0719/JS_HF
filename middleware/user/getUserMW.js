/**
 * Load a user from the database using the :userid param
 * The result is saved to res.locals.user
 */

module.exports = function (objectrepository) {
    return function (req, res, next) {
//        db("result", function(result)){
//            if (result.length === 0) {
//                return res.redirect('/user/list');        //nem létezik a user
//           }
//            res.locals.user = result[0];
//            next();
//        }
        next();
    };
};