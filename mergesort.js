function mergeSort(array) {
  if (array.length < 2) return array;

  let leftHalf = array.slice(0, array.length / 2);
  let rightHalf = array.slice(array.length / 2);

  leftHalf = mergeSort(leftHalf);
  rightHalf = mergeSort(rightHalf);

  let i = 0, j = 0, k = 0;
  const c = [];

  for (let m = 0; m < leftHalf.length + rightHalf.length; m++) {
    if (leftHalf[i] < rightHalf[j] || !rightHalf[j]) {
      c[k++] = leftHalf[i++];
    } else if (leftHalf[i] > rightHalf[j] || !leftHalf[i]) {
      c[k++] = rightHalf[j++]
    }
  }

  return c;
}

let sortedArray = mergeSort([335, 748, 266, 348, 485, 407, 41, 413, 5]);
