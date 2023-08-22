function fibs(n) {
    let array = [0, 1];

  for (let i = 2; i < n; i++) {
    array.push(array[i - 1] + array[i - 2]);
  }

  return array
  }


function fibsRec(n, array = [0, 1]) {
  // if you're a hotshot 
  return n < 3 ? array : array.push(array[array.length - 1] + array[array.length - 2])
  //if (n < 3) return array

  //array.push(array[array.length - 1] + array[array.length - 2])
  //return fibsRec(n - 1, array)
}

console.log(fibs(8))
console.log(fibsRec(8))
