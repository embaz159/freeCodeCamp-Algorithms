function chunkArrayInGroups(arr, size) {
    //Firstly, we create two empty arrays called temp and result, which we will eventually return.
      var temp = [];
      var result = [];
    //Our for loop loops until a is equal to or more than the length of the array in our test.
      for (var a = 0; a < arr.length; a++) {
        //Inside our loop, we push to temp using temp.push(arr[a]); if the remainder of a / size is not equal to size - 1.
        if (a % size !== size - 1)
          temp.push(arr[a]);
        //Otherwise, we push to temp, push temp to the result variable and reset temp to an empty array.
        else {
          temp.push(arr[a]);
          result.push(temp);
          temp = [];
        }
      }
    //Next, if temp isn’t an empty array, we push it to result.
      if (temp.length !== 0)
        result.push(temp);
      //Finally, we return the value of result.
      return result;
    }
    