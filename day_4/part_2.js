const fs = require("node:fs");

const input = fs.readFileSync("input", "utf8");

//NOTE grid[y][x]
const grid = input.split("\n").slice(0, -1);
const query = "XMAS";
let answer = 0;

grid.forEach((line, y) => {
    [...line].forEach((_, x) => {
        answer += wordsOnSpot(grid, x, y);
    });
});

console.log(answer);

// Curious : answer will be double for palindrome queries
function wordsOnSpot(grid, x, y) {
    if (matrixOOBSafeCmp(grid, x, y, "A")) {
        let temp = [
            matrixOOBSafeCmp(grid, x - 1, y - 1, "M") &&
            matrixOOBSafeCmp(grid, x + 1, y + 1, "S"),
            matrixOOBSafeCmp(grid, x + 1, y - 1, "M") &&
            matrixOOBSafeCmp(grid, x - 1, y + 1, "S"),
            matrixOOBSafeCmp(grid, x - 1, y + 1, "M") &&
            matrixOOBSafeCmp(grid, x + 1, y - 1, "S"),
            matrixOOBSafeCmp(grid, x + 1, y + 1, "M") &&
            matrixOOBSafeCmp(grid, x - 1, y - 1, "S"),
        ].filter((x) => x).length;
        //length can only me 0..2
        //2 -> 1 1 -> 0 0 -> 0
        return temp == 2 ? 1 : 0;
    }
    return 0;
}

function matrixOOBSafeCmp(arr, x, y, cmp) {
    try {
        return arr[y][x] == cmp;
    } catch (_) {
        return false;
    }
}
