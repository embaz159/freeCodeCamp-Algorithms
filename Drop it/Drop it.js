function dropElements(arr, func) {
    /* Use a while loop with Array.prototype.shift() to continue checking and dropping the first element of the array until the function returns true. It also makes sure the array is not empty first to avoid infinite loops.*/
    while(arr.length > 0 && !func(arr[0])) {
      arr.shift();
    }
    // Return the filtered array.
    return arr;
  }
  
  // test here
  dropElements([1, 2, 3, 4], function(n) {return n >= 3;});