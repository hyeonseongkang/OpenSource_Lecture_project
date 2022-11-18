const { spawn } = require("child_process");

const result = spawn("python", ["menu_crawler.py"]);

let menu = "";

result.stdout.on("data", function (data) {
  menu = data.toString();
});

// message 보내기
const getTodayMenu = function (rtm, channel) {
  rtm.sendMessage(menu, channel);
};

module.exports = {
  getTodayMenu,
};
