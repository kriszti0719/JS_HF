/**
 * Removes a umbrella from the database, the entity used here is: res.locals.umbrella
 * Redirects to /user/:userid after delete
 */
<<<<<<< Updated upstream

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};
=======
const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
  const UmbrellaModel = requireOption(objectrepository, "UmbrellaModel");

  return function (req, res, next) {
    UmbrellaModel.findOne({ _id: req.params.umbrellaid }, (err, umbrella) => {
      if (err || !umbrella) {
        return next(err);
      }

      res.locals.umbrella = umbrella;
      return next();
    });
  };
};
>>>>>>> Stashed changes
