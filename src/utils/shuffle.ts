export const shuffle = <T>(array: Array<T>): Array<T> => {
  const arrayLength = array.length
  const shuffledArray = [...array]

  for (let idx = arrayLength - 1; idx > 0; idx -= 1) {
    const randomIdx = Math.floor(Math.random() * (idx + 1));

    [shuffledArray[idx], shuffledArray[randomIdx]] = [
      shuffledArray[randomIdx],
      shuffledArray[idx]
    ]
  }

  return shuffledArray
}
