export const scatterplotGenerator = (num) => {
  const arr = [];
  const datapoints = num || 40;  // Number of dummy data points
  const maxRange = Math.random() * 1000;  // Max range of new values

  for (let i = 0; i < datapoints; i++) {
    const newNumber1 = Math.floor(Math.random() * maxRange);  // New random integer
    const newNumber2 = Math.floor(Math.random() * maxRange);  // New random integer
    arr.push([newNumber1, newNumber2]);
  }
  return arr;
};
