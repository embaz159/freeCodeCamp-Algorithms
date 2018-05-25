function repeatStringNumTimes(str, num) {
  
    //Create an empty string variable to store the repeated word.
    var accumulatedStr = '';
  //Use a while loop or for loop to repeat code as many times as needed according to num
    while (num > 0) {
      /*Then we just have to add the string to the variable created on step one, 
      and increase or decrease num depending on how you set the loop.*/
      accumulatedStr += str;
      num--;
    }
  //At the end of the loop, return the variable for the repeated word.
    return accumulatedStr;
  }