import {isEmptyArray} from "../common/isEmpty";
import {getLengthArr} from "./getLengthArr";

export const getArrayMax = (arr: number[]): number => {
  if (isEmptyArray(arr)) {
    return 0
  } else {
    const restArr = arr.slice(1, getLengthArr(arr))
    const maxInRestArr = getArrayMax(restArr)
    if (arr[0] > maxInRestArr){
      return arr[0]
    } else {
      return maxInRestArr
    }
  }
}


