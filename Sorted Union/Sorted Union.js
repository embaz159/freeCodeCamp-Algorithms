// Method 1
function uniteUnique(arr1, arr2, arr3) {
    // Creates an empty array to store our final result.
    var finalArray = [];
  
    /* Loop through the arguments object to truly made the program work with 
    two or more arrays instead of 3.*/
    for (var i = 0; i < arguments.length; i++) {
      var arrayArguments = arguments[i];
  
      // Loops through the array at hand
      for (var j = 0; j < arrayArguments.length; j++) {
        var indexValue = arrayArguments[j];
  
        // Checks if the value is already on the final array.
        if (finalArray.indexOf(indexValue) < 0) {
          finalArray.push(indexValue);
        }
      }
    }
  // Return finalArray.
    return finalArray;
  }
  
  // test here
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
  
  //Method 2
  
  /* Number of arguments can change dynamically, so we don’t need to 
  bother providing our function uniteUnique() with arguments at all.*/
  function uniteUnique() {
    var concatArr = [];
    var i = 0;
    // We use a while loop to concatenate all the arguments into one array called concatArr.
    while (arguments[i]){
      concatArr = concatArr.concat(arguments[i]); i++;
    }
    /* We use filter() to remove the duplicate elements by checking the index of 
    each element and removing same elements with different positions.*/
    uniqueArray = concatArr.filter(function(item, pos) {
      return concatArr.indexOf(item) == pos;
    });
    return uniqueArray;
  }
  
  // test here
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
  