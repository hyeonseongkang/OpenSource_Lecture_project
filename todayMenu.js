const evalutions = ["☆☆☆", "★☆☆", "★★☆", "★★★"];

const keyWords = ["고기", "초밥", "갈비", "볶음"];

// 오늘의 메뉴 안내하기
const getTodayMenu = function (rtm, channel, todayMenuText) {
  rtm.sendMessage(todayMenuText, channel);
};

// 오늘 메뉴 평가하기
const getMenuEvaluation = function (rtm, channel, todayMenuText) {
  if (todayMenuText === "오늘은 운영하지 않습니다.") {
    return;
  }

  const todaymenu = todayMenuText.split(",");
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
  rtm.sendMessage(evalutions[count], channel);
};

module.exports = {
  getTodayMenu,
  getMenuEvaluation,
};
