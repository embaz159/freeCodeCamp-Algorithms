function sumPrimes(num) {
    var res = 0;
  
    // Create a function that generates the numbers from 1 to num and check if they are prime along the way.
    function getPrimes(max) {
      // Declare the variables that will be needed.
      var sieve = [];
      var i;
      var j;
      var primes = [];
      // Start with 2, if it has not been marked and added to the sieve array then it is a prime and we add it to the prime array.
      for (i = 2; i <= max; ++i) {
        // Add the others to the sieve array.
        if (!sieve[i]) {
          // i has not been marked -- it is prime
          primes.push(i);
          for (j = i << 1; j <= max; j += i) {
            sieve[j] = true;
          }
        }
      }
  // Return the primes
      return primes;
    }
  
    // Loop through the returned array and add all the elements to then return the final value.
    var primes = getPrimes(num);
    for (var p = 0; p < primes.length; p++) {
      res += primes[p];
       }
  
    return res;
  }
  
  // test here
  sumPrimes(10);
  