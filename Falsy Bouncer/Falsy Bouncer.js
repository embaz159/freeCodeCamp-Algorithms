
/*The Array.prototype.filter method expects a function that returns a Boolean value which takes 
a single argument and returns true for truthy 488 value or false for falsy value. 
Hence we pass the built-in Boolean function.*/
function bouncer(arr) {
    return arr.filter(Boolean);
  }
  
  bouncer([7, "ate", "", false, 9]);
  