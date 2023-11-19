export const quickSort = (arr: number[]): number[] => {
  if (arr.length < 2) {
    return arr;
  } else {
    if (arr.length === 2) {
      if (arr[0] <= arr[1]) {
        return arr;
      } else {
        return [arr[1], arr[0]];
      }
    } else {
      const pivot = arr[0];
      const slicedArray = arr.slice(1, arr.length);
      const smallerPivotArray = [];
      const biggerOrEqualPivotArray = [];
      for (let item of slicedArray) {
        if (item < pivot) {
          smallerPivotArray.push(item);
        } else {
          biggerOrEqualPivotArray.push(item);
        }
      }
      return [...quickSort(smallerPivotArray), pivot, ...quickSort(biggerOrEqualPivotArray)];
    }
  }
};
