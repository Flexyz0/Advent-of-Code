# --- Day 2: Cube Conundrum ---

## Additional notes

For part one I splited all sets to just number and colors like "3 red" and removed them from bag to check if it goes minus or not.
For part two I used similar strategy but set bag to 0 at beginning and checked the color in set is bigger than bag or not and set the bigger value to bag.

## --- Part One ---

As you walk, the Elf shows you a small bag and some cubes which are either red, green, or blue. Each time you play this game, he will hide a secret number of cubes of each color in the bag, and your goal is to figure out information about the number of cubes.

To get information, once a bag has been loaded with cubes, the Elf will reach into the bag, grab a handful of random cubes, show them to you, and then put them back in the bag. He'll do this a few times per game.

You play several games and record the information from each game (your puzzle input). Each game is listed with its ID number (like the 11 in Game 11: ...) followed by a semicolon-separated list of subsets of cubes that were revealed from the bag (like 3 red, 5 green, 4 blue).

The Elf would first like to know which games would have been possible if the bag contained only 12 red cubes, 13 green cubes, and 14 blue cubes?

## --- Part Two ---

As you continue your walk, the Elf poses a second question: in each game you played, what is the fewest number of cubes of each color that could have been in the bag to make the game possible?

The power of a set of cubes is equal to the numbers of red, green, and blue cubes multiplied together.

For each game, find the minimum set of cubes that must have been present. What is the sum of the power of these sets?