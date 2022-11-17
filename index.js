const { RTMClient } = require("@slack/rtm-api");
const fs = require("fs");

let token;

try {
  token = fs.readFileSync("./token").toString("utf-8");
} catch (err) {
  console.error(err);
}

const rtm = new RTMClient(token);
rtm.start();

const { greeting } = require("./greeting");
const { getTodayMenu } = require("./todayMenu");
const square = require("./square");

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
        getTodayMenu(rtm, channel);
        break;

      default:
        rtm.sendMessage("I am alive", channel);
    }
  }
});
