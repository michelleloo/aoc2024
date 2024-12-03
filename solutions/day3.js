import fs from "fs";

const input = fs.readFileSync("input/day3.txt", "utf-8");

const is_numeric = (str) => {
    return /^\d+$/.test(str);
}

const part1 = (lines) => {
    const arr = lines.split("mul(");
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        const toEval = arr[i]
        if (!is_numeric(toEval[0])) {
            continue
        }
        else {
            const comma = toEval.indexOf(",");
            const end = toEval.indexOf(")");
            if (comma > 0 && end > 0) {
                const front = Number(toEval.substring(0, comma));
                const back = Number(toEval.substring(comma + 1, end));
                if (front != NaN && back != NaN && (front < 1000 && back < 1000)) {
                    result += Number(front) * Number(back);

                }

            }
        }
    }
    return result
}
const partTwo = (lines) => {
    let result = 0;
    const possibleDo = lines.split("don\'t()");
    result += part1(possibleDo[0]);
    for (let i = 1; i < possibleDo.length; i++) {
        const firstDo = possibleDo[i].indexOf("do()");
        if (firstDo > 0) {
            const toCheck = possibleDo[i].substring(firstDo, possibleDo[i].length);
            result += part1(toCheck);
        }
    }
    return result;

}
console.log(part1(input));
console.log(partTwo(input));