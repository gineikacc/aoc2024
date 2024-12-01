const fs = require("node:fs");

const input = fs.readFileSync("input", "utf8");

let answer = 0;
let listA = [];
let listB = [];

input.split("\n").forEach((line) => {
    const entries = line.split("   ");
    if (entries.length == 2) {
        listA.push(+entries[0]);
        listB.push(+entries[1]);
    }
});
listA = listA.sort();
listB = listB.sort();
for (let i = 0; i < listA.length; i++) {
    answer += Math.abs(listA[i] - listB[i]);
}

console.log(answer);
