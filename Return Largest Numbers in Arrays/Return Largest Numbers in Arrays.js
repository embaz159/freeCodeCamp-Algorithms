function largestOfFour(arr) {
    //Create a variable to store the results as an array.
    var results = [];
    //Create an outer loop to iterate through the outer array.
    for (var n = 0; n < arr.length; n++) {
      /*Create a second variable to hold the largest number and initialise it with the first number. 
      This must be outside an inner loop so it won’t be reassigned until we find a larger number.*/
      var largestNumber = arr[n][0];
      //Create said inner loop to work with the sub-arrays.
      for (var sb = 1; sb < arr[n].length; sb++) {
        /*Check if the element of the sub array is larger than the currently stored largest number. 
        If so, then update the number in the variable.*/
        if (arr[n][sb] > largestNumber) {
          largestNumber = arr[n][sb];
        }
      }
  //After the inner loop, save the largest number in the corresponding position inside of the results array.
      results[n] = largestNumber;
    }
  //And finally return said array.
    return results;
  }
  