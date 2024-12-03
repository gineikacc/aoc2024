const fs = require("node:fs");

const input = fs.readFileSync("input", "utf8");
const regex = /mul\((\d{1,3}),(\d{1,3})\)/g;

const matches = [...input.matchAll(regex)]
    .map((res) => res.slice(1, 3));
const answer = matches.reduce((prev, m) => prev + m[0] * m[1], 0);

console.log(answer);
