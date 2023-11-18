import { getSmallestInd } from './getSmallestInd';

export const selectionSortAsc = (arr: number[]) => {
  const sortedArr = [];
  const unsortedArr = [...arr];
  for (let i = 0; i < arr.length; i++) {
    const smallestItem = getSmallestInd(unsortedArr);
    sortedArr.push(unsortedArr[smallestItem]);
    unsortedArr.splice(smallestItem, 1);
  }
  return sortedArr;
};
