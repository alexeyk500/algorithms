export const binarySearchRecursive = (arr: number[], val: number, shiftInd: number = 0): number => {
  const middleArrInd = Math.floor(arr.length / 2);
    if (arr[middleArrInd] === val) {
      return shiftInd + middleArrInd;
    } else {
      if (arr[middleArrInd] < val) {
        const rightArr = arr.slice(middleArrInd, arr.length);
        return binarySearchRecursive(rightArr, val, shiftInd + middleArrInd);
      } else {
        const leftArr = arr.slice(0, middleArrInd);
        return binarySearchRecursive(leftArr, val);
      }
    }
};
