export const getSmallestInd = (arr: number[]) => {
  let smallestInd = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[smallestInd]) {
      smallestInd = i;
    }
  }
  return smallestInd;
};
