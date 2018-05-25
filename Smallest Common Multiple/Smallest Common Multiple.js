function smallestCommons(arr) {
    // Get the minimum (min) and maximum (max) in the arr.
      var min = Math.min.apply(null, arr);
      var max = Math.max.apply(null, arr);
    // Variable grandLCM will hold our final result.
      var grandLCM;
    // In a single loop, iterate from min to max-1.
      for (var i=min; i<max; i++) {
          if(i===min){
              grandLCM = (i * (i+1))/gcd(i, i+1);
          }else{
              grandLCM = (grandLCM * (i+1))/gcd(grandLCM, i+1);
          }
      }
  
      return grandLCM;
  /* In each iteration: if first iteration, compute the lcm of current and next number in range and hold intermediate result in grandLCM else compute the lcm of previous intermediate result and next number in range.*/
      function gcd(x, y) {    // Implements The Euclidean Algorithm
      if (y === 0)
          return x;
      else
          return gcd(y, x%y);
      }
  }
  
  // test here
  smallestCommons([1,5]);
  