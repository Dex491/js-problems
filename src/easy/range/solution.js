const numbers =  [1, 5, 20, 4, 241]

function range(array) {
  // if (num1 > num2 && num1 > num3) {
  //   let comp1 = num1 - num2
  //   let comp2 = num1 - num3
  const difference = Math.max(...array) - Math.min(...array)
  return difference
  // }
  // for (let i = 0; i < array.length; i++) {
    
  //   return console.log(array[i])
  // }
  
}