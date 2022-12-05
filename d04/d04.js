import data from './data.json' assert { type: 'json' }

let pairs = data.draw.split('\n')

// We create a draw of 99 elements and fill in with true if the number is in the range and false if not
const createDraw = (pair) => {
  const range = pair.split('-')
  const draw = Array.from(
    { length: 99 },
    (_, i) => i + 1 >= range[0] && i + 1 <= range[1]
  )
  return draw
}

// ** Part 1 **

const isFullyInPair = (pair1, pair2) => {
  const range1start = pair1.split('-')[0]
  const range1end = pair1.split('-')[1]

  // We first check if the range of the second pair is fully in the range of the first pair
  // I'm using the `slice` method to get the range of the second pair in the draw of the first pair
  // Then I'm using the `every` method to check if all the elements in the range are true
  const isFullyInPair1 = createDraw(pair2)
    .slice(range1start - 1, range1end)
    .every((_, i) => _)
  // If it is, we don't need to check it reverse because it's true this way, so we return 1
  if (isFullyInPair1) return 1

  const range2start = pair2.split('-')[0]
  const range2end = pair2.split('-')[1]

  // We then check if the range of the first pair is fully in the range of the second pair
  const isFullyInPair2 = createDraw(pair1)
    .slice(range2start - 1, range2end)
    .every((_, i) => _)
  if (isFullyInPair2) return 1

  return 0
}

const part1 = pairs
  .map((pair) => isFullyInPair(pair.split(',')[0], pair.split(',')[1]))
  .reduce((a, b) => a + b, 0)

console.log('Part 1:', part1)

// ** Part 2 **

// Same logic as part 1 but we check if the ranges are overlapping on at least one number instead of being fully in each other
const isPairOverlap = (pair1, pair2) => {
  const range1start = pair1.split('-')[0]
  const range1end = pair1.split('-')[1]

  // I'm using here the `some` method to check if at least one element in the range is true
  const isFullyInPair1 = createDraw(pair2)
    .slice(range1start - 1, range1end)
    .some((_, i) => _)
  if (isFullyInPair1) return 1

  const range2start = pair2.split('-')[0]
  const range2end = pair2.split('-')[1]

  const isFullyInPair2 = createDraw(pair1)
    .slice(range2start - 1, range2end)
    .some((_, i) => _)
  if (isFullyInPair2) return 1

  return 0
}

const part2 = pairs
  .map((pair) => isPairOverlap(pair.split(',')[0], pair.split(',')[1]))
  .reduce((a, b) => a + b, 0)

console.log('Part 2:', part2)
