const fs = require("fs");

let result;
var index;
var current = 10;
var pythonShell = require("python-shell");

var tempArray = [];

const dat = fs.readFileSync("./dept.txt", "utf8");
const arr = dat.split(/-|\n/);

var dept = [];
var location = [];

for (var a = 1; a < arr.length; a += 2) {
  location.push(arr[a]);
}

for (var b = 0; b < arr.length; b += 2) {
  console.log(arr[b].trim());
  dept.push(arr[b].trim());
}

const getDeptInfo = function (text) {
  tempArray = [];
  for (var i = 0; i < arr.length; i += 2) {
    const arrTemp = arr[i].toLowerCase();
    const textTemp = text.toLowerCase();

    var options = {
      mode: "text",
      pythonPath: "",
      pythonOptions: ["-u"],
      scriptPath: "",
      args: [textTemp.trim(), arrTemp.trim()],
    };

    pythonShell.PythonShell.run(
      "./calcStringDistance.py",
      options,
      function (err, results) {
        if (err) throw err;
        tempArray.push(results);
      }
    );
  }
};

const getMinIndex = function (array) {
  var tempArray2 = array;
  for (var i = 0; i < tempArray2.length; i += 1) {
    if (Number(tempArray2[i]) === -1) {
      tempArray2[i] = 100000;
    }
  }
  var tempIndex = tempArray2[0];
  for (var j = 0; j < tempArray2.length; j += 1) {
    console.log(tempArray2[j]);
    if (tempArray2[j] < tempIndex) {
      minValue = tempArray2[j];
      tempIndex = j;
    }
  }
  return tempIndex;
};

const deptInfo = function (rtm, channel, text) {
  if (Number(dept.indexOf(text.trim())) !== -1) {
    console.log("매칭됨");
    rtm.sendMessage(location[Number(dept.indexOf(text.trim()))], channel);
  } else {
    console.log("매칭안됨");
    getDeptInfo(text);
    setTimeout(function () {
      var temp = Number(getMinIndex(tempArray));
      if (temp === -1) {
        rtm.sendMessage("db에 존재하지 않습니다.", channel);
      } else {
        rtm.sendMessage("이걸 찾으셨나요? : " + location[temp], channel);
      }
    }, 1000);
  }
};

module.exports = {
  deptInfo,
  getDeptInfo,
};
