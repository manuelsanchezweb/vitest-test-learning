export const canReconfigure = (from, to) => {
  if (typeof from !== 'string') throw new Error('First parameter is not string')
  if (typeof to !== 'string') throw new Error('Second parameter is not string')

  const isSameLength = from.length === to.length
  if (!isSameLength) return false

  const hasSameUniqueLetters = new Set(from).size === new Set(to).size
  if (!hasSameUniqueLetters) return false

  const transformations = {}
  for (let i = 0; i < from.length; i++) {
    const fromLetter = from[i]
    const toLetter = to[i]

    const storedLetter = transformations[fromLetter]
    if (storedLetter && storedLetter !== toLetter) return false

    transformations[fromLetter] = toLetter
  }

  console.log(transformations)

  return true
}
