const numbers =  [1, 5, 20, 4, 241]

function range(array) {
  // if (num1 > num2 && num1 > num3) {
  //   let comp1 = num1 - num2
  //   let comp2 = num1 - num3
      
  // }
  for (let i = 0; i < array.length; i++) {
    if (array[i] < Math.max(array)) {
      console.log(array[i])
    }
  }
}