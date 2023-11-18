export const binarySearch = (values:number[], searchValue: number): number | null => {
  console.log('values', values,);
  console.log('searchValue', searchValue);
  console.log('')
  
  let low = 0
  let high = values.length -1;
  
  while (low <= high) {
    console.log('--- low', low, 'high', high)
    const guess =  Math.round((low + high) / 2);
    console.log('guess', guess, 'value =', values[guess]);
    if (values[guess] === searchValue ) {
      return guess
    } else {
      if (searchValue > values[guess]) {
        console.log('too low, new low =', guess + 1);
        low = guess + 1
      } else {
        console.log('too high, new high =', guess - 1);
        high = guess - 1
      }
    }
  }
  return null
}