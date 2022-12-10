const { input } = require('./input')

const Shapes = {
  A: { losesAgainst: 'B', score: 1 },
  B: { losesAgainst: 'C', score: 2 },
  C: { losesAgainst: 'A', score: 3 },
}

const Outcomes = {
  X: 0,
  Y: 3,
  Z: 6,
}

const findLosingShape = (shape) => {
  return Object.keys(Shapes).find((key) => Shapes[key].losesAgainst === shape)
}

const matchResults = input.map((match) => {
  const shapeAndOutcome = match.split(' ')

  const opponent = shapeAndOutcome[0]
  const outcome = shapeAndOutcome[1]

  if (outcome === 'Y') {
    return Shapes[opponent].score + Outcomes[outcome]
  } else if (outcome === 'Z') {
    const opponentShape = Shapes[opponent]
    const playerShape = Shapes[opponentShape.losesAgainst]

    return playerShape.score + Outcomes[outcome]
  } else {
    const playerShape = findLosingShape(opponent)

    return Shapes[playerShape].score + Outcomes[outcome]
  }
})

const total = matchResults.reduce((a, b) => a + b, 0)
console.log(total)
