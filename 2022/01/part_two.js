const { input } = require('./input')

const summedElves = input.map((elf) => {
  const sumOfCalories = elf
    .split('\n')
    .reduce((a, b) => parseInt(a) + parseInt(b), 0)
  return sumOfCalories
})

const sortedSummedElves = summedElves.sort((a, b) => b - a)
const topThreeElvesSummed = sortedSummedElves
  .slice(0, 3)
  .reduce((a, b) => a + b, 0)

console.log(topThreeElvesSummed)
