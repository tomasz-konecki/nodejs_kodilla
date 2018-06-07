var fs = require("fs");
var StatMode = require("stat-mode");

fs.stat("./node.png", (err, stats) => {
  var statMode = new StatMode(stats);
  console.log(statMode);
});
