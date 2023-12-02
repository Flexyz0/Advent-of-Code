const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8').split('\n');

// Part One

let sumOfImp = 0;
for(line of input) {
    let game = true;
    line = line.split(': ');
    gameCode = line[0].split(' ')[1];
    for(set of line[1].split('; ')) {
        const bag = {
            'red' : 12,
            'green' : 13,
            'blue' : 14,
        };
        for(cubes of set.split(', ')) {
            bag[cubes.split(' ')[1]] -= cubes.split(' ')[0];
        }
        if(bag.blue < 0 || bag.green < 0 || bag.red < 0) game = false;
    }
    if(game === false) sumOfImp += parseInt(gameCode)
}
console.log('Part One : ' + (5050 - sumOfImp))

// Part Two

sumOfPowers = 0;
for(line of input) {
    line = line.split(': ');
    const bag = {
        'red' : 0,
        'green' : 0,
        'blue' : 0,
    };
    for(set of line[1].split('; ')) {
        for(cubes of set.split(', ')) {
            if(parseInt(bag[cubes.split(' ')[1]]) < parseInt(cubes.split(' ')[0])) {bag[cubes.split(' ')[1]] = cubes.split(' ')[0];}
        }
    }
    sumOfPowers += (parseInt(bag.blue) * parseInt(bag.green) * parseInt(bag.red));
}
console.log('Part Two : ' + sumOfPowers)