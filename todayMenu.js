const evalutions = ["☆☆☆", "★☆☆", "★★☆", "★★★"];

const keyWords = ["고기", "초밥", "갈비", "볶음"];

const fs = require("fs");

try {
  todayMenuText = fs.readFileSync("./todaymenu.txt").toString("utf-8");
} catch (err) {
  console.error(err);
}

// 오늘의 메뉴 안내하기
const sendTodayMenu = function (rtm, channel) {
  rtm.sendMessage(todayMenuText, channel);
};

const getTodayMenuText = function () {
  return todayMenuText;
};

const getMenuEvaluationCount = function (text) {
  const todaymenu = text.split(",");
  let count = 0;
  for (var i in todaymenu) {
    for (var j in keyWords) {
      if (todaymenu[i].includes(keyWords[j], 2)) {
        count += 1;
      }
    }
  }

  if (count > 3) {
    count = 3;
  }

  if (text === "오늘은 운영하지 않습니다.") {
    count = -1;
  }
  return count;
};

const getMenuEvaluationText = function () {
  const count = getMenuEvaluationCount(todayMenuText);
  if (count === -1) {
    return "";
  }
  return evalutions[count];
};

// 오늘 메뉴 평가하기
const sendMenuEvaluation = function (rtm, channel) {
  const sendMessage = getMenuEvaluationText();

  if (sendMessage === "") {
    return;
  }
  rtm.sendMessage(sendMessage, channel);
};

module.exports = {
  sendTodayMenu,
  sendMenuEvaluation,
  getTodayMenuText,
  getMenuEvaluationCount,
  getMenuEvaluationText,
  evalutions,
};
