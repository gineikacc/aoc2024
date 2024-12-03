const fs = require("node:fs");

const input = fs.readFileSync("input", "utf8");
const mulRegex = /mul\((\d{1,3}),(\d{1,3})\)/g;
const enableRegex = /do(n't)?\(\)/g;

const matches = [...input.matchAll(mulRegex)]
    .map((res) => ["mult", ...res.slice(1, 3), res.index]);
const enableMatches = [...input.matchAll(enableRegex)]
    .map((res) => ["flag", ...res.slice(0, 2), res.index]);

let answer = 0;
let flag = true;

[...matches, ...enableMatches]
    .sort((a, b) => a[3] - b[3])
    .forEach((x) => {
        if (x[0] == "flag") flag = !x[2];
        if (x[0] == "mult" && flag) answer += +x[1] * +x[2];
        console.log(x);
    });

console.log(answer);
