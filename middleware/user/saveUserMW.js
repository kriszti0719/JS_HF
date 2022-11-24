/**
 * Using POST params saves a user to the database
 * This middleware creates an entity
 * Redirects to /user/list after success
 */

<<<<<<< Updated upstream
module.exports = function (objectrepository) {
    return function (req, res, next) {
//        if(typeof req.body.name === 'undefined'){
//            return next();
//        } ----> Így ez semmit nem csinál get lekérdezéseknél.
//        next();
    };
};
=======
const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
  const UserModel = requireOption(objectrepository, "UserModel");

  return function (req, res, next) {
    if (
      typeof req.body.name === "undefined" ||
      typeof req.body.nick === "undefined" ||
      typeof req.body.room === "undefined" ||
      typeof req.body.table === "undefined"
    ) {
      return next();
    }

    if (typeof res.locals.user === "undefined") {
      res.locals.user = new UserModel();
    }

    if (Number.isNaN(parseInt(req.body.room, 10))) {
      return next(new Error("A szobaszámot számokkal add meg lécci!"));
    }

    res.locals.user.name = req.body.name;
    res.locals.user.nick = req.body.nick;
    res.locals.user.room = parseInt(req.body.room, 10);
    res.locals.user.table = req.body.table;
    res.locals.user.admin = false;

    res.locals.user.save((err) => {
      if (err) {
        return next(err);
      }

      return res.redirect("/user/list");
    });
  };
};
>>>>>>> Stashed changes
