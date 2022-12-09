const fs = require("fs");

let result;
var index;
var current = 10;
var pythonShell = require("python-shell");

var tempArray = [];

const dat = fs.readFileSync("./dept.txt", "utf8");
const arr = dat.split(/-|\n/);

var location = [];

for (var a = 1; a < arr.length; a += 2) {
  location.push(arr[a]);
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
  var tempIndex = -1;
  var tempArray2 = array;
  for (var i = 0; i < tempArray2.length; i += 1) {
    if (Number(tempArray2[i]) === -1) {
      tempArray2[i] = 100000;
    }
  }
  var minValue = tempArray2[0];
  for (var j = 0; j < tempArray2.length; j += 1) {
    if (tempArray2[j] < minValue) {
      minValue = tempArray2[j];
      tempIndex = j;
    }
  }

  return tempIndex;
};

const deptInfo = function (rtm, channel, text) {
  getDeptInfo(text);
  setTimeout(function () {
    var temp = Number(getMinIndex(tempArray));
    if (temp === -1) {
      rtm.sendMessage("db에 존재하지 않습니다.", channel);
    } else {
      rtm.sendMessage("이걸 찾으셨나요? : " + location[temp], channel);
    }
  }, 1000);
};

module.exports = {
  deptInfo,
  getDeptInfo,
};
