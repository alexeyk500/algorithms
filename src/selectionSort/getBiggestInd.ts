export const getBiggestInd = (arr: number[]) => {
  let biggestInd = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[biggestInd]) {
      biggestInd = i;
    }
  }
  return biggestInd;
};
