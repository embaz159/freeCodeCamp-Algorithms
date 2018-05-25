// Method 1
function sumFibs(num) {
    // Create a variable to keep record of the current and previous numbers along with the result that will be returned.
      var prevNumber = 0;
      var currNumber = 1;
      var result = 0;
    // Use a while loop to make sure we do not go over the number given as parameter.
      while (currNumber <= num) {
        // We use the modulo operand to check if the current number is odd or even. If it is even, add it to the result.
          if (currNumber % 2 !== 0) {
              result += currNumber;
          }
        // Complete the Fibonacci circle by rotating getting the next number and swapping values after.
          currNumber += prevNumber;
          prevNumber = currNumber - prevNumber;
      }
  // Return the result.
      return result;
  }
  
  // test here
  sumFibs(4);
  
  // Method 2
  function sumFibs(num) {
    // Create an array of fibonacci numbers till num.
    var arrFib = [1];
    for (var i = 1; i <=num;) {
        arrFib.push(i);
        i = arrFib[arrFib.length - 1] + arrFib[arrFib.length - 2];
    }
  
    // Use reduce() method to find the sum of odd members of array.
    var res = arrFib.reduce(function(prev, curr) {
        if (curr%2 !== 0) return prev + curr;
        else return prev;
      });
  // Return the sum.
    return res;
  }
  
  // test here
  sumFibs(4);