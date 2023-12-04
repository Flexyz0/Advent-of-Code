const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8').split('\n');
let sum = 0;
let part2sum = 0;
const copies = {};
let cardId;
for(line of input) {
    if(line.split(': ')[0].split(' ')[1] === '') {
        if(line.split(': ')[0].split(' ')[2] === '') {
            cardId = line.split(': ')[0].split(' ')[3];
        } else cardId = line.split(': ')[0].split(' ')[2]
    } else cardId = line.split(': ')[0].split(' ')[1]
    copies[cardId] = 1;
}

for(line of input) {
    if(line.split(': ')[0].split(' ')[1] === '') {
        if(line.split(': ')[0].split(' ')[2] === '') {
            cardId = line.split(': ')[0].split(' ')[3];
        } else cardId = line.split(': ')[0].split(' ')[2]
    } else cardId = line.split(': ')[0].split(' ')[1]
    let cardPoints = 0;
    let winnings = [];
    for(i of line.split(': ')[1].split(' | ')[0].split(' ')) if (i !== '') winnings.push(i);
    let numbers = [];
    for (i of line.split(': ')[1].split(' | ')[1].split(' ')) if (i !== '') numbers.push(i);
    for (index of numbers) {
        if(winnings.includes(index)) {
            if(cardPoints === 0) {
                cardPoints += 1;
            } else if (cardPoints !== 0) cardPoints = cardPoints*2
        }
    }
    sum += parseInt(cardPoints)

    // Part Two
    let matches = 0;
    for (index of numbers) {
        if (winnings.includes(index)) matches += 1;
    }
    for(let i = 1;i<=matches;i++) copies[(parseInt(cardId)+i)] += copies[cardId];

}
for(let i = 1; i <=209;i++) part2sum += copies[i]
console.log('Part One : ' + sum + '\n' + 'Part Two : ' + part2sum)