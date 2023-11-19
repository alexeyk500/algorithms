export const countDown = (value: number) => {
  console.log(value);
  if (value === 0) {
    return;
  } else {
    countDown(value - 1);
  }
};
