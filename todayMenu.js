const { spawn } = require("child_process");

const result = spawn("python", ["menu_crawler.py"]);

let menu = "";
let count = 0;
const evalutions = ["☆☆☆", "★☆☆", "★★☆", "★★★"];

const keyWords = ["고기", "초밥"];

result.stdout.on("data", function (data) {
  menu = data.toString();
  const arrayOfStrings = menu.split(",");

  for (var i in arrayOfStrings) {
    if (arrayOfStrings[i].includes("고기", 2)) {
      count += 1;
    }
  }
});

// message 보내기
const getTodayMenu = function (rtm, channel) {
  rtm.sendMessage(menu, channel);
};

const getMenuEvaluation = function (rtm, channel) {
  if (count > 3) {
    count = 3;
  }
  rtm.sendMessage(evalutions[count], channel);
};

module.exports = {
  getTodayMenu,
  getMenuEvaluation,
};
