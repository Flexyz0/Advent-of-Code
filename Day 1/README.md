# --- Day 1: Trebuchet?! ---

## Additional notes

My strategy on part two was slicing lines for every letter and look for if its starting with a number spelling and replace that spelling with a digit.
In replacing I used ˙function() {return equals[j]}˙ to only replace first match (I think not doing it could give the same result) and its replacing word-1 to get through overlapping problem. In example : It have 'eightwo', will look for if its starting with 'eight' but will replace 'eigh' to 8, so this gives '8two' not '8wo'.

## --- Part One ---

The newly-improved calibration document consists of lines of text; each line originally contained a specific calibration value that the Elves now need to recover. On each line, the calibration value can be found by combining the first digit and the last digit (in that order) to form a single two-digit number.

For example:

1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet
In this example, the calibration values of these four lines are 12, 38, 15, and 77. Adding these together produces 142.

Consider your entire calibration document. What is the sum of all of the calibration values?

## --- Part Two ---

Your calculation isn't quite right. It looks like some of the digits are actually spelled out with letters: one, two, three, four, five, six, seven, eight, and nine also count as valid "digits".

Equipped with this new information, you now need to find the real first and last digit on each line. For example:

two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen
In this example, the calibration values are 29, 83, 13, 24, 42, 14, and 76. Adding these together produces 281.

What is the sum of all of the calibration values?