const fs = require("node:fs");

const input = fs.readFileSync("input", "utf8");

const answer = input.split("\n")
    .slice(0, -1)
    .filter((report) => checkSafety(report)).length;

console.log(answer);

// Bad name probably lol
function assertGradient(a, b, c) {
    return (a < b && b < c) || (a > b && b > c);
}

function checkSafety(report) {
    const levels = report.split(" ").map((x) => +x);
    for (let i = 0; i < levels.length - 2; i++) {
        const a = levels[i];
        const b = levels[i + 1];
        const c = levels[i + 2];
        if (!assertGradient(a, b, c)) return false;
        if (Math.abs(a - b) > 3) return false;
    }
    //Check last one edge case
    const [penult, ult] = levels.slice(-2);
    if (Math.abs(penult - ult) > 3) return false;

    return true;
}
