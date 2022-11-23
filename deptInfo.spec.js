const assert = require("assert");
const { getDeptInfo } = require("./deptInfo");
const fs = require("fs");

const data = fs.readFileSync("./dept.txt", "utf8");
const arr = data.split(/-|\n/);

let count = 0;

const deptLocatedtest = function () {
  for (var i = 1; i < arr.length; i += 2) {
    if (arr[i].trim() === getDeptInfo(arr[i - 1]).trim()) {
      count += 1;
    }
  }
};

describe("Feature#4 학과 사무실 안내 Test!", function () {
  it("과 이름 입력시 사무실 위치 출력", function (done) {
    deptLocatedtest();
    assert.equal(count, arr.length / 2);
    done();
  });
});

module.exports = {
  deptLocatedtest,
};
