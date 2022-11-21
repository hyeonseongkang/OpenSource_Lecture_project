const assert = require("assert");
const { getDeptInfo, deptLocated } = require("./deptInfo");
const fs = require("fs");

let deptLocatedtest;
try {
  const data = fs.readFileSync("./dept.txt", "utf8");
  const arr = data.split(/-|\n/);

  for (var i = 1; i < arr.length; i += 2) {
    if (arr[i].trim() === deptLocated.trim()) {
      deptLocatedtest = arr[i - 1];
    }
  }
} catch (err) {
  console.error(err);
}

describe("Feature#4 학과 사무실 안내 Test!", function () {
  it("과 이름 입력시 사무실 위치 출력", function (done) {
    assert.equal(deptLocatedtest, getDeptInfo);
    done();
  });
});
