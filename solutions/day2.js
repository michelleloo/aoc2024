import fs from 'fs';

const input = fs.readFileSync('input/day2.txt', 'utf-8').split('\n');


const partOne = (input) => {
    let reports = 0;

    for (let i = 0; i < input.length; i++) {
        const nums = input[i].split(" ").map(Number);
        let asc = true;
        if (nums[0] > nums[1]) {
            asc = false;
        }
        let safe = true;
        for (let j = 0; j < nums.length - 1; j++) {
            let a, b;
            if (asc) {
                a = nums[j];
                b = nums[j + 1];
            } else {
                b = nums[j];
                a = nums[j + 1];
            }

            if (a >= b || (b - a) > 3) {
                safe = false;
                break;
            }
        }
        if (safe) {
            reports += 1
        }
    }
    return reports;
}
const partTwo = (input) => {
    let reports = 0;

    for (let i = 0; i < input.length; i++) {
        const nums = input[i].split(" ").map(Number);

        if (checkArray(nums)) {
            reports += 1;
        }
        else {
            let safe = false;
            for (let j = 0; j < nums.length && !safe; j++) {
                safe = checkArray(nums.toSpliced(j, 1));
                if (safe) {
                    reports += 1;
                }
            }
        }
    }

    return reports;
};

const checkArray = (report) => {
    let lastNum = Number(report[0]);
    let direction = "unknown"; // Direction can be "increasing" or "decreasing"
    let safe = true;

    for (let i = 1; i < report.length && safe; i++) {
        const currentNum = Number(report[i]);

        // Determine the direction (increasing or decreasing) based on the first comparison
        if (direction === "unknown") {
            direction = lastNum < currentNum ? "increasing" : "decreasing";
        }

        // Check if the report direction changes
        if (direction === "increasing" && lastNum > currentNum) {
            safe = false;
        } else if (direction === "decreasing" && lastNum < currentNum) {
            safe = false;
        }

        // Check difference between is outside the valid range of 1 to 3
        const difference = Math.abs(lastNum - currentNum);
        if (difference < 1 || difference > 3) {
            safe = false;
        }
        lastNum = currentNum;
    }

    return safe;
}

console.log(partOne(input))
console.log(partTwo(input))
