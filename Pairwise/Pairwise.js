//Method 1

function pairwise(arr, arg) {
    // The variable sum holds the sum of indices.
    // Set sum of indices to zero
    var sum = 0;
    // make a local copy of the arguments object so we don't modify it directly
    var pairArr = arr.slice();
    // The outer for loop starts from the first element of arr.
    // looping from first element
    for(i = 0; i < pairArr.length; i++) {
      //The inner for loop starts from the second element of arr.
      //Looping from second element by setting first element  constant
      for(j = i + 1; j < pairArr.length; j++) {
        // If the sum of an element and the element succeeding it is equal to arg:
        // Check whether the sum is equal to arg
        if(pairArr[i] + pairArr[j] == arg) {
          //The sum of the indices of these elements is added to sum.
          //Add the indices
          sum += i + j;
          //These elements are set to NaN so that they’re not used in the next iteration.
          //Set the indices to NaN so that they can't be used in next iteration
          pairArr[i] = pairArr[j] = NaN;
        }
      }
    }
    //After the loops are completed, the sum is returned.
    return sum;
   }
   
   // test here
   pairwise([1,4,2,3,0,5], 7);


   //Method 2

   /*This code takes advantage of the fact that the native Array.prototype.indexOf() 
   method will return the lowest index of the value it finds, a requirement of the challenge. 
   Given that you start with the first item in the array (automatically the lowest of it’s value), 
   you’re guaranteed to always find the lowest pairs, before removing them from the search space.*/

   function pairwise(arr, arg) {
    // search array for elements that when paired, equal the second argument, then sum their indices
    // make a local copy of the arguments object so we don't modify it directly
    var pairArr = arr.slice();
    return pairArr.reduce( function (a,b,index){ // use native reduce to collect running total of summed indices
        var search = arg - b; // get difference of current item so we know what value will sum to arg
  
        // check if search value in rest of the array, but also make sure it doesn't match current search index
        if ( pairArr.indexOf(search) != -1 && pairArr.indexOf(search) != index ){ 
           var total = index + pairArr.indexOf(search);  // if found, add to the runnning total
           pairArr.splice(index,1,NaN); // remove current index from the array
           pairArr.splice(pairArr.indexOf(search),1,NaN); // remove the other matched element from the array
           return a + total; //return the running total back to reduce for next item
        }
        return a; // simply return previous total if no operations needed
    },0);
  }
  // test here
  pairwise([1,4,2,3,0,5], 7);