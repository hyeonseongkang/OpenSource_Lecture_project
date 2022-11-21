const fs = require("fs");

const deptInfo = function (rtm, channel, text) {
  const data = fs.readFileSync("./dept.txt", "utf8");
  const arr = data.split(/-|\n/);

  for (var i = 0; i < arr.length; i += 2) {
    if (arr[i].trim() === text.trim()) {
      const deptLocated = arr[i + 1];
      rtm.sendMessage(deptLocated, channel);
      return false;
    }
  }
  return true;
};

module.exports = {
  deptInfo,
};
