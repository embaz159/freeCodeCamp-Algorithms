
function mutation(arr) {
    //First we make the two strings in the array lowercase. test will hold what we are looking for in target.
    var test = arr[1].toLowerCase();
    var target = arr[0].toLowerCase();
    //Then we loop through our test characters and if any of them is not found we return false.
    for (i=0;i<test.length;i++) {
      if (target.indexOf(test[i]) === -1)      
        return false;
    }
    //If they are all found, the loop will finish without returning anything and we get to return true.
    return true;
   }