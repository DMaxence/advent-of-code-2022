import data from './data.json' assert { type: 'json' }

let rucksacks = data.draw.split('\n')

// This function will use `charCodeAt` to return the ASCII code of the letter. That way we can sum the total as wanted in the challenge
const getLetterValue = (letter) =>
  letter.charCodeAt(0) > 90
    ? letter.charCodeAt(0) - 96
    : letter.charCodeAt(0) - 64 + 26

// *** Part 1 ***

// First let's split the rucksacks in two compartments of half the size of the string
const getCompartments = (string) => {
  return [string.slice(0, string.length / 2), string.slice(string.length / 2)]
}

// Now we can filter the second first part to keep only the letter that are in the second compartment too
// Like that we can get the letter that are in both compartments
const getSameLetterInCompartment = (compartments) => {
  return compartments[0]
    .split('')
    .filter((letter) => compartments[1].includes(letter))[0]
}

// Now we can map over the rucksacks to get the compartments and the same letter in the compartments
const part1 = rucksacks
  .map((rucksack) =>
    getLetterValue(getSameLetterInCompartment(getCompartments(rucksack)))
  )
  .reduce((a, b) => a + b)

console.log('Part 1:', part1)

// *** Part 2 ***

// We'll use the same logic here but filtering the letter that are int the second and the third compartment
// Like that we can get the letter that are in all three compartments
const getSameLetterInGroup = (group) => {
  return group[0]
    .split('')
    .filter(
      (letter) => group[1].includes(letter) && group[2].includes(letter)
    )[0]
}

const groupsOfThree = []

// We'll use a for loop to get the groups of three
let i = 0
while (i < rucksacks.length) {
  groupsOfThree.push([rucksacks[i], rucksacks[i + 1], rucksacks[i + 2]])
  i += 3
}

const part2 = groupsOfThree
  .map((group) => getLetterValue(getSameLetterInGroup(group)))
  .reduce((a, b) => a + b)

console.log('Part 2:', part2)
