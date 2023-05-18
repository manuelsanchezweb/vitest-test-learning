export const fizzbuzz = (number) => {
  if (typeof number !== 'number') throw new Error('No number passed')
  if (Number.isNaN(number)) throw new Error('Not a number')

  //   Easy way
  //   if (number % 15 === 0) return 'fizzBuzz'
  //   if (number % 3 === 0) return 'fizz'
  //   if (number % 5 === 0) return 'buzz'
  //   return number

  //   Smart way
  const multiplies = { 3: 'fizz', 5: 'buzz', 7: 'woff' }
  let output = ''

  // Object entries returns an array of arrays
  // [ [ '3', 'fizz' ], [ '5', 'buzz' ], [ '7', 'woff' ] ]
  Object.entries(multiplies).forEach(([key, value]) => {
    if (number % key === 0) output += value
  })

  return output === '' ? number : output
}
