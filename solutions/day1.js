import fs from 'fs';

//16:32
const input = fs.readFileSync('../input/day1.txt', 'utf-8').split('\n');

const rightArr = new Array();
const leftArr = new Array();
for (let i = 0; i < input.length; i++) {
    const row = input[i].split("   ");
    const right = Number(row[0]);
    const left = Number(row[1]);
    rightArr.push(right);
    leftArr.push(left);
}
rightArr.sort();
leftArr.sort();
let distance = 0;
rightArr.forEach((x, idx) => {
    const left = leftArr[idx];
    if (x < left) {
        distance += left - x;
    }
    else {
        distance += x - left;
    }
})
console.log(distance);


//Part 2

const rightCount = {}
//Create object for count of right array 
rightArr.forEach(x => {
    if (Object.hasOwn(rightCount, x)) {
        const count = rightCount[x];
        rightCount = count + 1
    }
    else {
        rightCount[x] = 1;
    }
})
let similarity = 0;

leftArr.forEach((x, idx) => {
    if (Object.hasOwn(rightCount, x)) {
        const simToAdd = x * rightCount[x];
        similarity += simToAdd;
    }
})

console.log(similarity);