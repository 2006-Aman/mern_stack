const path = require("path");

const filePath = path.join("Phase02" ,"newFolder", "test.txt");

console.log(filePath);

const fileName = path.basename(filePath);

console.log(fileName);

const directoryName = path.dirname(filePath);

console.log(directoryName);