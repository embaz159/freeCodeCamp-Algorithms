function getIndexToIns(arr, num) {
    //First I sort the array using .sort(callbackFuntion) to sort it by lowest to highest, from left to right.
    arr.sort(function(a, b) {
      return a - b;
    });
  /*Then I use a for loop to compare the items in the array starting from the smallest one. When an item on the array is greater than the number we are comparing against, then we return the index as an integer.*/
    for (var a = 0; a < arr.length; a++) {
      if (arr[a] >= num)
        return a;
    }
  
    return arr.length;
  }
  getIndexToIns([40, 60], 50);