/**Betöltjük a chai expect részét*/
var expect = require("chai").expect;
/**Betöltjük a middlewaret*/
var getUmbrellaMW = require("../middleware/umbrella/getUmbrellaMW");

describe("getUmbrella middleware ", function () {
  it("Should set res.locals.umbrella with an umbrella object from db", function (done) {
    const mw = getUmbrellaMW({
      UmbrellaModel: {
        findOne: (p1, cb) => {
          expect(p1).to.be.eql({ _id: "123" });
          cb(null, "mockUmbrella");
        },
      },
    });

    const resMock = {
      locals: {},
    };

    mw(
      {
        params: {
          umbrellaid: "123",
        },
      },
      resMock,
      (err) => {
        expect(err).to.be.eql(undefined);
        expect(resMock.locals).to.be.eql({ umbrella: "mockUmbrella" });
        done();
      }
    );
  });
  it("Should call next with an error when there is a db problem", function (done) {
    const mw = getUmbrellaMW({
      UmbrellaModel: {
        findOne: (p1, cb) => {
          expect(p1).to.be.eql({ _id: "123" });
          cb("bármi", null);
        },
      },
    });

    const resMock = {
      locals: {},
    };

    mw(
      {
        params: {
          umbrellaid: "123",
        },
      },
      resMock,
      (err) => {
        expect(err).to.be.eql("bármi");
        done();
      }
    );
  });
  it("Should call next when no umbrella can be found in the db", function (done) {
    const mw = getUmbrellaMW({
      UmbrellaModel: {
        findOne: (p1, cb) => {
          expect(p1).to.be.eql({ _id: "123" });
          cb(undefined, null);
        },
      },
    });

    const resMock = {
      locals: {},
    };

    mw(
      {
        params: {
          umbrellaid: "123",
        },
      },
      resMock,
      (err) => {
        expect(err).to.be.eql(undefined);
        expect(resMock.locals).to.be.eql({});
        done();
      }
    );
  });
});
