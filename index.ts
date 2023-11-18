import { selectionSortAsc } from './src/selectionSort/selectionSortAsc';
import { selectionSortDesc } from './src/selectionSort/selectionSortDesc';

// // 1. BinarySearch
// const sortedArr = [1, 2, 7, 12, 15, 16, 27, 38, 49, 60];
// const position = binarySearch(sortedArr, 12);
// console.log('position', position);

// 2. SelectionSort
const arr = [12, 60, 7, 2, 38, 15, 49, 16, 27, 1];

const sortedArrAsc = selectionSortAsc(arr);
console.log('Asc', sortedArrAsc);

const sortedArrDesc = selectionSortDesc(arr);
console.log('Desc', sortedArrDesc);
