/**Betöltjük a chai expect részét*/
var expect = require("chai").expect;
/**Betöltjük a middlewaret*/
var saveUserMW = require("../middleware/user/saveUserMW");

describe("saveUser middleware ", function () {
  it("Should set res.locals.user with a user object from db", function (done) {
    const mw = saveUserMW({
      UserModel: "asd",
    });

    mw(
      {
        body: {
          name: "nev",
          nick: "nick",
          room: "1212",
          table: "table",
        },
      },
      {
        locals: {
          user: {
            save: (cb) => {
              cb(null);
            },
          },
        },
        redirect: (where) => {
          expect(where).to.be.eql("/user/list");
          done();
        },
      },
      (err) => {
        //no next
      }
    );
  });
  it("Should call next with err if there's a db error", function (done) {
    const mw = saveUserMW({
      UserModel: "asd",
    });

    mw(
      {
        body: {
          name: "nev",
          nick: "nick",
          room: "1212",
          table: "table",
        },
      },
      {
        locals: {
          user: {
            save: (cb) => {
              cb("db error");
            },
          },
        },
        redirect: (where) => {},
      },
      (err) => {
        //no next
        expect(err).to.be.eql("db error");
        done();
      }
    );
  });
  it("Should next with a num error on room param", function (done) {
    const mw = saveUserMW({
      UserModel: "asd",
    });

    mw(
      {
        body: {
          name: "nev",
          nick: "nick",
          room: "asd",
          table: "table",
        },
      },
      {
        locals: {
          user: {
            save: (cb) => {
              cb(null);
            },
          },
        },
        redirect: (where) => {},
      },
      (err) => {
        //no next
        expect(err.toString()).to.be.eql(
          "Error: A szobaszámot számokkal add meg lécci!"
        );
        expect(err).to.be.instanceof(Error);
        done();
      }
    );
  });
  it("Should set res.locals.user with a user object from db when umbrella already exists", function (done) {
    class UmbrellaMockModel {
      save(cb) {
        cb(null);
      }
    }

    const mw = saveUserMW({
      UserModel: UmbrellaMockModel,
    });

    mw(
      {
        body: {
          name: "nev",
          nick: "nick",
          room: "1212",
          table: "table",
        },
      },
      {
        locals: {},
        redirect: (where) => {
          expect(where).to.be.eql("/user/list");
          done();
        },
      },
      (err) => {
        //no next
      }
    );
  });
  it("Should call next with err, name undefined", function (done) {
    class UmbrellaMockModel {
      save(cb) {
        cb(null);
      }
    }

    const mw = saveUserMW({
      UserModel: UmbrellaMockModel,
    });

    mw(
      {
        body: {
          name: undefined,
          nick: "nick",
          room: "1212",
          table: "table",
        },
      },
      {
        locals: {},
        redirect: (where) => {},
      },
      (err) => {
        expect(err).to.be.eql(undefined);
        done();
      }
    );
  });
});
