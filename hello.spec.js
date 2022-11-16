const assert = require("assert");
const { sayHello } = require("./hello");

describe("App test!", function () {
  it("Test - sayHello should return hello", function (done) {
    assert.equal(sayHello(), "hello");
    done();
  });
});
