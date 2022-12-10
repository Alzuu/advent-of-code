const { input } = require('./input')

const Shapes = {
  A: 1,
  B: 2,
  C: 3,
  X: 1,
  Y: 2,
  Z: 3,
}

const outcomeScore = (shapesInMatch) => {
  const opponent = shapesInMatch[0]
  const player = shapesInMatch[1]

  if (Shapes[player] === Shapes[opponent]) {
    return 3
  } else if (player === 'X' && opponent === 'B') {
    return 0
  } else if (player === 'Y' && opponent === 'C') {
    return 0
  } else if (player === 'Z' && opponent === 'A') {
    return 0
  } else {
    return 6
  }
}

const matchResults = input.map((match) => {
  const shapesInMatch = match.split(' ')

  const shapeScore = shapesInMatch.map((a) => Shapes[a])[1]

  const sumScore = shapeScore + outcomeScore(shapesInMatch)
  return sumScore
})

const total = matchResults.reduce((a, b) => a + b, 0)
console.log(total)
