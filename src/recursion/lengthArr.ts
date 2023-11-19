export const lengthArr = (arr: number[]): number => {
  if (arr.length === 0) {
    return 0
  } else {
    const restArr = arr.slice(1, arr.length)
    return 1 + lengthArr(restArr)
  }
}
