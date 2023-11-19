import {getArrayMax} from "./src/recursion/getArrayMax";
import {getArrayMin} from "./src/recursion/getArrayMin";

// // 1. BinarySearch
// const sortedArr = [1, 2, 7, 12, 15, 16, 27, 38, 49, 60];
// const position = binarySearch(sortedArr, 12);
// console.log('position', position);

// // 2. SelectionSort
// const arr = [12, 60, 7, 2, 38, 15, 49, 16, 27, 1];
//
// const sortedArrAsc = selectionSortAsc(arr);
// console.log('Asc', sortedArrAsc);
//
// const sortedArrDesc = selectionSortDesc(arr);
// console.log('Desc', sortedArrDesc);

// 3. Recursion
// const value = 10;
// countDown(value);

// const arr = [2, 4, 6];
// const sum = sumArr(arr);
// console.log('arr', arr);
// console.log('sumArr', sum);
//
// const length = getLengthArr(arr);
// console.log('arr', arr);
// console.log('getLengthArr', length);

const arr = [12, -7, 2, 38, 60, 15, 49, 16, 27, 6];
const max = getArrayMax(arr);
console.log('max', max);

const min = getArrayMin(arr);
console.log('min', min);
