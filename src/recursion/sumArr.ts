export const sumArr = (arr: number[]) => {
  if (arr.length === 0) {
    return 0
  } else {
    const restArr = arr.slice(1, arr.length)
    console.log('arr[0]', arr[0], 'restArr', restArr)
    return arr[0] + sumArr(restArr)
  }
}
