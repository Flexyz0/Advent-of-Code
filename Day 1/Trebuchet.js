
// Part 1

const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8');
lines = input.split('\n')
let sum = 0;
for(let i=0 ; i<lines.length ; i++) {
    line = lines[i].split('');
    let nums = [];
    for(let j=0 ; j<line.length ; j++) {
        if(!isNaN(line[j])) nums.push(line[j]);
    }
    sum += parseInt((nums[0])+nums[nums.length-1]);
}
console.log('Part 1 : ' + sum);

// Part 2

let sum2 = 0;
const numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const equals = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
for(line of lines) {
    for(let i = 0; i<line.length;i++) {
        for(j = 0; j < numbers.length; j++) {
            if(line.slice(i).startsWith(numbers[j])) line = line.replace(numbers[j].slice(0,numbers[j].length-1), function() {return equals[j]})
        }
    }
    line = line.split('');
    let nums = [];
    for(let i = 0; i<line.length; i++) {
        if(!isNaN(line[i])) nums.push(line[i]);
    }
    sum2 += parseInt(nums[0]+nums[nums.length-1]);
}
console.log('Part 2 : ' + sum2);
