const { RTMClient } = require("@slack/rtm-api");
const fs = require("fs");
const { spawn } = require("child_process");

const result = spawn("python", ["menuCrawler.py"]);
result.stdout.on("data", function (data) {});
let token;

try {
  token = fs.readFileSync("./token").toString("utf-8");
} catch (err) {
  console.error(err);
}

const rtm = new RTMClient(token);
rtm.start();

const { greeting } = require("./greeting");

const {
  sendTodayMenu,
  sendMenuEvaluation,
  sendWeeklyMenuEvaluation,
} = require("./todayMenu");

const { deptInfo } = require("./deptInfo");

let numTemp = false;

rtm.on("message", function (message) {
  const { channel } = message;
  const { text } = message;

  if (!isNaN(text)) {
    square(rtm, text, channel);
  } else {
    switch (text) {
      case "Hi":
        greeting(rtm, channel);
        break;

      case "오늘 밥 뭐야":
        sendTodayMenu(rtm, channel);
        sendMenuEvaluation(rtm, channel);
        break;

      case "학과 안내":
        numTemp = true;
        rtm.sendMessage("학과를 입력하세요", channel);
        break;
        
      case "이번주 뭐 나와":
        sendWeeklyMenuEvaluation(rtm, channel);
        break;

      default:
        if (numTemp === false) {
          rtm.sendMessage("I am alive", channel);
        } else {
          deptInfo(rtm, channel, text);
          numTemp = false;
        }
    }
  }
});
