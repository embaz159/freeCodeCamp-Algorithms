//Method 1
function sym() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
        //push() is used to break down the arguments object to an array, args.
        args.push(arguments[i]);
    }
//The symDiff function finds the symmetric difference between two sets. 
//It is used as a callback function for the reduce() method called on args.
    function symDiff(arrayOne, arrayTwo) {
        var result = [];
//arrayOne.forEach() pushes the elements to result which are present only in 
//arrayOne as well as not already a part of result.
        arrayOne.forEach(function(item) {
            if (arrayTwo.indexOf(item) < 0 && result.indexOf(item) < 0) {
                result.push(item);
            }
        });
//arrayTwo.forEach() pushes the elements to result which are 
//present only in arrayTwo as well as not already a part of result.
        arrayTwo.forEach(function(item) {
            if (arrayOne.indexOf(item) < 0 && result.indexOf(item) < 0) {
                result.push(item);
            }
        });
//The result, which is the symmetric difference is returned. This solution works for any number of sets.
        return result;
    }

    // Apply reduce method to args array, using the symDiff function
    return args.reduce(symDiff);
}

//Method 2

function sym() {
    // diff consists of the difference between set A and set B.
    const diff = (A, B) => new Set([...A].filter(n => !B.has(n)));
    // result holds the object which has been converted to an array using the spread operator.
    const result = [...arguments]
      // map() is used to populate the new set object with elements from arr using the symmetric difference formula.
      .map(arr => new Set(arr))
      // using the formula in https://en.wikipedia.org/wiki/Symmetric_difference
      // i reduce it by uniting the diff(A, B) and diff(B, A)
      .reduce((acc, set) => new Set([...diff(acc, set), ...diff(set, acc)]));
  
    // Before returning, the set is converted to an array using the spread operator.
    return [...result];
  }
  
  // test here
  sym([1, 2, 3], [5, 2, 1, 4]);