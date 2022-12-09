const { input } = require('./input')

let mostCalories = 0
const mapElves = input.map((elf) => {
  const sumOfCalories = elf
    .split('\n')
    .reduce((a, b) => parseInt(a) + parseInt(b), 0)

  if (mostCalories < sumOfCalories) {
    mostCalories = sumOfCalories
  }
})

console.log(mostCalories)
