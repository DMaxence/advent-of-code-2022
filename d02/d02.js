import data from './data.json' assert { type: 'json' }

let rounds = data.draw.split('\n').map((line) => line.split(' '))

// *** Part 1 ***

// These are the values we have for Rock Paper Scissors moves
const RPC = {
  A: 1,
  B: 2,
  C: 3,
  X: 1,
  Y: 2,
  Z: 3,
}

// Those are the function that will return the value of the move if we win or lose

const Rock = (p2) => {
  if (p2 === 2) return 6
  else if (p2 === 3) return 0
}

const Paper = (p2) => {
  if (p2 === 3) return 6
  else if (p2 === 1) return 0
}

const Scissors = (p2) => {
  if (p2 === 1) return 6
  else if (p2 === 2) return 0
}

// The play function won't call the RPC functions if it's a draw because we already know the result
// It will call the RPC functions if it's not a draw and return the result
const play = (p1, p2) => {
  if (p1 === p2) {
    return 3
  }
  if (p1 === 1) {
    return Rock(p2)
  }
  if (p1 === 2) {
    return Paper(p2)
  }
  if (p1 === 3) {
    return Scissors(p2)
  }
}

let part1 = rounds
  .map((round) => {
    let [player1, player2] = round
    return play(RPC[player1], RPC[player2]) + RPC[player2]
  })
  .reduce((acc, cur) => acc + cur, 0)

console.log('Part 1:', part1)

// *** Part 2 ***

// These are the values of the issue of the game from lost to win
const toPlay = {
  X: 0,
  Y: 3,
  Z: 6,
}

// Here we map the move to the function that will return the value of the move if we win or lose
const myRpc = {
  A: (p2) => toPlay[p2] + ReverseRock(toPlay[p2]),
  B: (p2) => toPlay[p2] + ReversePaper(toPlay[p2]),
  C: (p2) => toPlay[p2] + ReverseScissors(toPlay[p2]),
}

// Those are the function that will return the value of the move if we win or lose
const ReverseRock = (draw) => {
  if (draw === 0) return 3
  else if (draw === 3) return 1
  else if (draw === 6) return 2
}

const ReversePaper = (draw) => {
  if (draw === 0) return 1
  else if (draw === 3) return 2
  else if (draw === 6) return 3
}

const ReverseScissors = (draw) => {
  if (draw === 0) return 2
  else if (draw === 3) return 3
  else if (draw === 6) return 1
}

let part2 = rounds
  .map((round) => {
    let [player1, player2] = round
    return myRpc[player1](player2)
  })
  .reduce((acc, cur) => acc + cur, 0)

console.log('Part 2:', part2)
