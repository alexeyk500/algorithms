import {isEmptyArray} from "../common/isEmpty";
import {getLengthArr} from "./getLengthArr";

export const getArrayMin = (arr: number[]): number => {
  if (isEmptyArray(arr)) {
    return undefined
  } else {
    const restArr = arr.slice(1, getLengthArr(arr))
    const minInRestArr = getArrayMin(restArr)
    if (minInRestArr){
      if (arr[0] < minInRestArr) {
        return arr[0]
      } else {
        return minInRestArr
      }
    } else {
      return arr[0]
    }
  }
}


