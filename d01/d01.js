import data from './data.json' assert { type: 'json' }

let max1 = 0
let max2 = 0
let max3 = 0

// Here we split the groups by splitting with two line breaks '\n\n'
// and then we map over the groups to do the math
data.calories.split('\n\n').forEach((cal) => {
  // Here we split the lines by splitting with a line break '\n'
  let calArray = cal.split('\n')
  let sum = 0
  // We map over the lines to do get the sum of the calories from each group
  calArray.forEach((calories) => {
    sum += parseInt(calories)
  })
  // We check if the sum is greater than the max and if so we set the max to the sum
  // We also want to assign in desc cascading order to keep track of the numbers

  // Then we do the same for the second and third max
  if (sum > max1) {
    max3 = max2
    max2 = max1
    max1 = sum
  } else if (sum > max2) {
    max3 = max2
    max2 = sum
  } else if (sum > max3) {
    max3 = sum
  }
})

const part1 = max1

const part2 = max1 + max2 + max3

console.log('Part 1:', part1)
console.log('Part 2:', part2)
