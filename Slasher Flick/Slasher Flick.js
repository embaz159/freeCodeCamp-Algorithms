function slasher(arr, howMany) {
    //This solution uses the splice() function.
    //First argument, arr is the array to be modified.
    //Second argument, howMany is the number of elements to be removed starting with arr[0].
    arr.splice(0, howMany);
    //Modify the array with splice() and return it.
    return arr;
  }
  slasher([1, 2, 3], 2);
  