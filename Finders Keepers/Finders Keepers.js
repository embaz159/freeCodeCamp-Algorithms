
function findElement(arr, func) {
    filterArr = arr.filter(func); //filter array with the function provided
  
    return filterArr[0]; // then return the first element that returns true, or undefined if no elements return true
  }
  
  // test here
  findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });