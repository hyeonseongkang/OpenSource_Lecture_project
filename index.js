const fs = require("fs");
let token;

try {
  token = fs.readFileSync("./token").toString("utf-8");
} catch (err) {
  console.error(err);
}

console.log(token);

console.log("hello!!");
