const { RTMClient } = require("@slack/rtm-api");
const fs = require("fs");

const { spawn } = require("child_process");

const result = spawn("python", ["menu_crawler.py"]);

let token;
let todayMenuText;

try {
  token = fs.readFileSync("./token").toString("utf-8");
} catch (err) {
  console.error(err);
}

const rtm = new RTMClient(token);
rtm.start();

const { greeting } = require("./greeting");

const { getTodayMenu, getMenuEvaluation } = require("./todayMenu");

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
        try {
          todayMenuText = fs.readFileSync("./todaymenu.txt").toString("utf-8");
        } catch (err) {
          console.error(err);
        }
        getTodayMenu(rtm, channel, todayMenuText);
        getMenuEvaluation(rtm, channel, todayMenuText);
        break;

      default:
        if (deptInfo(rtm, channel, text))
          rtm.sendMessage("I am alive", channel);
    }
  }
});
