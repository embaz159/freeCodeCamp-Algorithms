
function sumAll(arr) {
    /*First create a variable to store the max number between two.
    Since the numbers might not be always in order, using max() and min() will help organize.*/
      var max = Math.max(arr[0], arr[1]);
      var min = Math.min(arr[0], arr[1]);
    //The same as before for the Smallest number.
      var temp = 0;
    //We create a temporary variable to add the numbers.
      for (var i=min; i <= max; i++){
          temp += i;
      }
    return(temp);
  }
  
  sumAll([1, 4]);