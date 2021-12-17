function insertionSort(array) {
  const arr = array.slice();
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        const temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else {
        break;
      }
    }
  }

  return arr;
}

console.log(
  insertionSort([1, 3, 2, 10, 8, 100, 50, 80, 20, 35, 77, 14, 24, 9, 6])
);
