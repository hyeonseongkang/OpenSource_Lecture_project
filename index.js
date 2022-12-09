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
}https://github.com/hyeonseongkang/OpenSource_Lecture_project/pull/31/conflict?name=index.js&ancestor_oid=061964acf405d35035bdc4c44cd902585f367604&base_oid=f417edfa219b12aed777b2528d96f8a4c2c9f2d8&head_oid=211d7d1d9c971c8cef163812ece96ee858e70341

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
        sendMenuEvaluation(rtm, channel);https://github.com/hyeonseongkang/OpenSource_Lecture_project/pull/31/conflict?name=todaymenu.txt&ancestor_oid=a74a5405fd67949b1e39dbb02efe0812c8951ab4&base_oid=629fdfd286dfcdd535f5303d21fbd4c244c410ee&head_oid=835a232cc0044668bc458507cc44e013822c3e7f
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
