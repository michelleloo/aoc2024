import { error } from 'console';
import fs from 'fs';

const input = fs.readFileSync('input/day4.txt', 'utf-8').split('\n');

const part1 = (lines) => {
    let result = 0;
    let twoDArr = [];
    const lengthBase = lines[0].split("").length;
    const buffer = new Array(lengthBase + 6).fill(".");
    [0, 0, 0, 0].forEach(() => {
        twoDArr.push(buffer);

    })


    lines.reduce((prev, line) => {
        prev.push([".", ".", ".", ...line.split(""), ".", ".", ".",]);
        return prev
    }, twoDArr)
    [0, 0, 0, 0].forEach(() => {
        twoDArr.push(buffer);

    })


    for (let i = 0; i < twoDArr.length; i++) {
        const indicesX = twoDArr[i]
            .map((x, idx) => (x === 'X' ? idx : -1)) // Mark indices with 'X' and others as -1
            .filter(idx => idx !== -1); // Filter out non-'X' indices
        indicesX.forEach(x => {
            const square = []
            /* Used to help me work it out
            const rowOne = twoDArr[i - 3].slice(x - 3, x + 4);
            const rowTwo = twoDArr[i - 2].slice(x - 3, x + 4);
            const rowThree = twoDArr[i - 1].slice(x - 3, x + 4);
            const rowFour = twoDArr[i].slice(x - 3, x + 4);
            const rowFive = twoDArr[i + 1].slice(x - 3, x + 4);
            const rowSix = twoDArr[i + 2].slice(x - 3, x + 4);
            const rowSeven = twoDArr[i + 3].slice(x - 3, x + 4);
            square.push(rowOne, rowTwo, rowThree, rowFour, rowFive, rowSix, rowSeven);
            */
            for (let offset = -3; offset <= 3; offset++) {
                const row = twoDArr[i + offset]?.slice(x - 3, x + 4) || [];
                square.push(row);
            }
            result += cleanedUpBoudingBox(square, "XMAS");
        })
        //v2


    }
    return result
}

//IGNORE THIS BUT I MUST KEEP IT HERE TO REMIND MYSELF OF A TRAVESTY
const checkBoundingBox = (square, word) => {
    let count = 0;
    let forward = square[3][3] + square[3][4] + square[3][5] + square[3][6];
    let backward = square[3][3] + square[3][2] + square[3][1] + square[3][0];
    let up = square[3][3] + square[2][3] + square[1][3] + square[0][3];
    let down = square[3][3] + square[4][3] + square[5][3] + square[6][3];
    let upRightDiagonal = square[3][3] + square[2][4] + square[1][5] + square[0][6];
    let upLeftDiagonal = square[3][3] + square[2][2] + square[1][1] + square[0][0];
    let downRightDiagonal = square[3][3] + square[4][4] + square[5][5] + square[6][6];
    let downLeftDiagonal = square[3][3] + square[4][2] + square[5][1] + square[6][0];
    count += checkWork(forward, word) ? 1 : 0
    count += checkWork(backward, word) ? 1 : 0
    count += checkWork(up, word) ? 1 : 0
    count += checkWork(down, word) ? 1 : 0
    count += checkWork(upRightDiagonal, word) ? 1 : 0
    count += checkWork(upLeftDiagonal, word) ? 1 : 0
    count += checkWork(downRightDiagonal, word) ? 1 : 0
    count += checkWork(downLeftDiagonal, word) ? 1 : 0
    console.log(forward, backward, up, down, upRightDiagonal, upLeftDiagonal, downRightDiagonal, downLeftDiagonal);
    return count
}
const checkWork = (test, word) => {
    return test === word
}

const part2 = (lines) => {
    let result = 0;
    let twoDArr = [];
    const lengthBase = lines[0].split("").length;
    const buffer = new Array(lengthBase + 1).fill(".");

    twoDArr.push(buffer);


    lines.reduce((prev, line) => {
        prev.push([".", ...line.split(""), ".",]);
        return prev
    }, twoDArr)
    twoDArr.push(buffer);

    for (let i = 0; i < twoDArr.length; i++) {
        const indicesX = twoDArr[i]
            .map((x, idx) => (x === 'A' ? idx : -1))
            .filter(idx => idx !== -1);

        indicesX.forEach(x => {
            const square = []
            const rowOne = twoDArr[i - 1].slice(x - 1, x + 2);
            const rowTwo = twoDArr[i].slice(x - 1, x + 2);
            const rowThree = twoDArr[i + 1].slice(x - 1, x + 2);
            square.push(rowOne, rowTwo, rowThree);
            result += checkBoundingBox2(square, "MAS") === 2 ? 1 : 0;
        })
    }
    return result
}
const checkBoundingBox2 = (square, word) => {
    let count = 0;
    let upRightDiagonal = square[2][0] + square[1][1] + square[0][2];
    let upLeftDiagonal = square[2][2] + square[1][1] + square[0][0];
    let downLeftDiagonal = square[0][2] + square[1][1] + square[2][0];
    let downRightDiagonal = square[0][0] + square[1][1] + square[2][2];
    count += checkWork(upRightDiagonal, word) ? 1 : 0
    count += checkWork(upLeftDiagonal, word) ? 1 : 0
    count += checkWork(downRightDiagonal, word) ? 1 : 0
    count += checkWork(downLeftDiagonal, word) ? 1 : 0
    return count
}
console.log(part1(input))
console.log(part2(input))

//2204 too low
//2536 right 