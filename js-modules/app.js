import * as R from 'ramda';

const arr1 = [1, 1, 1, 2, 3, 4, 4, 4, 4];
const arr2 = [5, 5, 5, 5, 6, 6, 6, 6, 7, 10, 1];

const arr3 = R.union(arr1, arr2);

console.log(arr3);
