const assert = require("chai");

const { getMessage, randomGreetings } = require("./greeting");

describe("Feature#1 인사하기 Test!", function () {
  it("Hi 입력 받으면 [Hello!!, 안녕하세요!!, Bonjour@] 중 하나 출력 ", function (done) {
    // randomGreetings안에 getMessage() 값이 있을경우 pass
    assert.include(randomGreetings, getMessage(), "test!!");
    done();
  });
});
