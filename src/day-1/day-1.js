const fs = require('fs');

const calibrationValues = [];
const allContents = fs.readFileSync('./input.txt', 'utf-8');

allContents.split(/\r?\n/).forEach((line) => {
    const stringofNumbers = line.replace(/\D/g,'');
    let numberToAdd;

    if (stringofNumbers.length < 1) {
        return;
    } else if (stringofNumbers.length === 1) {
        numberToAdd = Number(`${stringofNumbers}${stringofNumbers}`);
        calibrationValues.push(numberToAdd);
    } else {
        const firstNumberRegex = /^(\d)[^\d]*/;
        const lastNumberRegex = /(\d)[^\d]*$/;
        const firstNumber = stringofNumbers.match(firstNumberRegex)[0];
        const lastNumber = stringofNumbers.match(lastNumberRegex)[0];

        numberToAdd = Number(`${firstNumber}${lastNumber}`);
        calibrationValues.push(numberToAdd)
    }
});

const sumOfCallibrationValues = calibrationValues.reduce((a, b) => a + b, 0);

console.log(sumOfCallibrationValues);
