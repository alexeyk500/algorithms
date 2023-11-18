import { binarySearch } from './src/binaySearch/binaySearch.js';

// 1. BinarySearch
const values = [1, 2, 7, 12, 15, 16, 27, 38, 49, 60];
const position = binarySearch(values, 12);
console.log('position', position);
