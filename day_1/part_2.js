const fs = require("node:fs");

const input = fs.readFileSync("input", "utf8");

let answer = 0;
const listA = [];
const listB = [];

input.split("\n").forEach((line) => {
    const entries = line.split("   ");
    if (entries.length == 2) {
        listA.push(+entries[0]);
        listB.push(+entries[1]);
    }
});

listA.forEach((a) => {
    const encounters = listB.filter((b) => a == b).length;
    answer += a * encounters;
});

console.log(answer);
