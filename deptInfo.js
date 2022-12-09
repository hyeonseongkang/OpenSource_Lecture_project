const fs = require("fs");

var spawn = require("child_process").spawn;

let result;
let numTemp = -2;
let strTemp2;
let deptLocated = "";
let strTemp;

const getDeptInfo = function (text) {
  const dat = fs.readFileSync("./dept.txt", "utf8");
  const arr = dat.split(/-|\n/);
  var cond = false;
  for (var i = 0; i < arr.length; i += 2) {
    const arrTemp = arr[i].toLowerCase();
    // const textTemp = "cimputersinc";
    const textTemp = text.toLowerCase();
    result = spawn("py", [
      "calcStringDistance.py",
      textTemp.trim(),
      arrTemp.trim(),
    ]);

    strTemp2 = arr[i + 1];
    // eslint-disable-next-line no-loop-func
    if (cond) {
      break;
    }
    console.log(strTemp2);
    result.stdout.on("data", (data) => {
      const dataTemp = data.toString().replace(/\n/g, "").trim();
      // console.log(dataTemp);
      if (Number(dataTemp) > 1) {
        numTemp = Number(dataTemp);
        strTemp = strTemp2;
        cond = true;
        console.log("i값 : ");
        console.log(i);
      }
      if (
        Number(dataTemp) !== -1 &&
        (Number(dataTemp) < numTemp || numTemp === -2)
      ) {
        numTemp = Number(dataTemp);
        strTemp = strTemp2;
        cond = true;
        console.log(strTemp);
      }
    });
  }
  deptLocated = strTemp;
  return deptLocated;
};
const deptInfo = function (rtm, channel, text) {
  const dept = getDeptInfo(text);
  console.log(dept);
  if (numTemp !== -1) {
    if (numTemp === 0) {
      rtm.sendMessage(dept, channel);
    } else {
      let tempMessage = "이걸 찾으셨나요? : ";
      tempMessage += dept;
      rtm.sendMessage(tempMessage, channel);
    }
    numTemp = -2;
  } else {
    rtm.sendMessage("db에 존재하지 않습니다.", channel);
  }
};

module.exports = {
  deptInfo,
  getDeptInfo,
};

/*
const fs = require("fs");

var spawn = require("child_process").spawn;

let result;
let numTemp = -2;
let strTemp2;
let deptLocated = "";
let strTemp;

const getDeptInfo = function (text) {
  const dat = fs.readFileSync("./dept.txt", "utf8");
  const arr = dat.split(/-|\n/);

  for (var i = 0; i < arr.length; i += 2) {
    const arrTemp = arr[i].toLowerCase();
    // const textTemp = "cimputersinc";
    const textTemp = text.toLowerCase();
    result = spawn("py", [
      "calcStringDistance.py",
      textTemp.trim(),
      arrTemp.trim(),
    ]);

    strTemp2 = arr[i + 1];
    // eslint-disable-next-line no-loop-func
    result.stdout.on("data", (data) => {
      const dataTemp = data.toString().replace(/\n/g, "").trim();
      if (
        Number(dataTemp) !== -1 &&
        (Number(dataTemp) < numTemp || numTemp === -2)
      ) {
        numTemp = Number(dataTemp);
        strTemp = strTemp2;
        console.log(strTemp);
      }
    });
  }
  deptLocated = strTemp;
  return deptLocated;
};
const deptInfo = function (rtm, channel, text) {
  const dept = getDeptInfo(text);
  console.log(dept);
  if (numTemp !== -1) {
    if (numTemp === 0) {
      rtm.sendMessage(dept, channel);
    } else {
      let tempMessage = "이걸 찾으셨나요? : ";
      tempMessage += dept;
      rtm.sendMessage(tempMessage, channel);
    }
    numTemp = -2;
  } else {
    rtm.sendMessage("db에 존재하지 않습니다.", channel);
  }
};

module.exports = {
  deptInfo,
  getDeptInfo,
};

*/
