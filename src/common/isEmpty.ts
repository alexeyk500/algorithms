export const isEmptyArray = (arr: Array<any>) => {
  for (let key in arr) {
    if (arr.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
};
