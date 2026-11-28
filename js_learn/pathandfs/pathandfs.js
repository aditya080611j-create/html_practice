// const { log } = require("console");
const fs= require("fs")

const path = require("path");
// console.log(fs);
console.log("starting");
// fs.writeFileSync(path.join(__dirname, "aditya.txt"), "this is java script 2")
fs.writeFile("aditya2.txt","this is js",() => {
    console.log("done");
    
})
console.log("end");

