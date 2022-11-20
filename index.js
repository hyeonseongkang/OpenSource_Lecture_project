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

const { sendTodayMenu, sendMenuEvaluation } = require("./todayMenu");

const square = require("./square");

const { deptInfo } = require("./deptInfo");

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

      default:
        if (deptInfo(rtm, channel, text))
          rtm.sendMessage("I am alive", channel);
    }
  }
});
