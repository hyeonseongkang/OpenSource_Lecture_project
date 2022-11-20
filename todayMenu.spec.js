const assert = require("assert");
const {
  getTodayMenuText,
  getMenuEvaluationCount,
  getMenuEvaluationText,
  evalutions,
} = require("./todayMenu");
const fs = require("fs");

let todayMenuText;
try {
  todayMenuText = fs.readFileSync("./todaymenu.txt").toString("utf-8");
} catch (err) {
  console.error(err);
}
describe("Feature#3 오늘의 메뉴 안내 Test!", function () {
  it("오늘 밥 뭐야 입력 받으면 진수원 중식 식단 안내 하기", function (done) {
    assert.equal(todayMenuText, getTodayMenuText());
    done();
  });
});

describe("Feature#3 오늘의 메뉴 평가 Test!", function () {
  it("오늘의 식단 평가하기", function (done) {
    const count = getMenuEvaluationCount(todayMenuText);
    var testText = "";
    if (count !== -1) {
      testText = evalutions[count];
    }
    assert.equal(getMenuEvaluationText(), testText);
    done();
  });
});
