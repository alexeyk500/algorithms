import {getBiggestInd} from "./getBiggestInd";

export const selectionSortDesc = (arr: number[]) => {
  const sortedArr = [];
  const unsortedArr = [...arr]
  for (let i = 0; i < arr.length; i++) {
    const smallestItem = getBiggestInd(unsortedArr)
    sortedArr.push(unsortedArr[smallestItem])
    unsortedArr.splice(smallestItem, 1)
  }
  return sortedArr;
}
