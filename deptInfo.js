const fs = require("fs");

const getDeptInfo = function (text) {
  const data = fs.readFileSync("./dept.txt", "utf8");
  const arr = data.split(/-|\n/);
  let deptLocated = "no";

  for (var i = 0; i < arr.length; i += 2) {
    if (arr[i].trim() === text.trim()) {
      deptLocated = arr[i + 1];
      break;
    }
  }

  return deptLocated;
};

const deptInfo = function (rtm, channel, text) {
  const dept = getDeptInfo(text);
  if (dept !== "no") {
    rtm.sendMessage(dept, channel);
    return false;
  }
  return true;
};

module.exports = {
  deptInfo,
  getDeptInfo,
};
