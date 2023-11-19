import { isEmptyArray } from '../common/isEmpty';

export const getLengthArr = (arr: number[]): number => {
  if (isEmptyArray(arr)) {
    return 0;
  } else {
    const restArr = arr.slice(1, arr.length);
    return 1 + getLengthArr(restArr);
  }
};
