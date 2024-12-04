const fs = require("node:fs");

const input = fs.readFileSync("input", "utf8");

//NOTE grid[y][x]
const grid = input.split("\n").slice(0, -1);
const query = "XMAS";
let answer = 0;

grid.forEach((line, y) => {
    [...line].forEach((_, x) => {
        answer += wordsOnSpot(grid, [...query], x, y);
    });
});

console.log(answer);

// Curious : answer will be double for palindrome queries
function wordsOnSpot(grid, query, x, y, queryIdx = 0, dx = 0, dy = 0) {
    let count = 0;
    if (
        query.length == queryIdx + 1 &&
        matrixOOBSafeCmp(grid, x + dx, y + dy, query[queryIdx])
    ) {
        return 1;
    }

    if (matrixOOBSafeCmp(grid, x + dx, y + dy, query[queryIdx])) {
        if (dx == 0 && dy == 0) {
            count += wordsOnSpot(grid, query, x, y, queryIdx + 1, 1, 1);
            count += wordsOnSpot(grid, query, x, y, queryIdx + 1, 1, 0);
            count += wordsOnSpot(grid, query, x, y, queryIdx + 1, 1, -1);
            count += wordsOnSpot(grid, query, x, y, queryIdx + 1, 0, 1);
            count += wordsOnSpot(grid, query, x, y, queryIdx + 1, 0, -1);
            count += wordsOnSpot(grid, query, x, y, queryIdx + 1, -1, 1);
            count += wordsOnSpot(grid, query, x, y, queryIdx + 1, -1, 0);
            count += wordsOnSpot(grid, query, x, y, queryIdx + 1, -1, -1);
        } else {
            return wordsOnSpot(
                grid,
                query,
                x,
                y,
                queryIdx + 1,
                Math.sign(dx) + dx,
                Math.sign(dy) + dy,
            );
        }
    } else {
        return 0;
    }

    return count;
}

function matrixOOBSafeCmp(arr, x, y, cmp) {
    try {
        return arr[y][x] == cmp;
    } catch (_) {
        return false;
    }
}
