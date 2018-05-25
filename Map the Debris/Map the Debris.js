//Method 1
function orbitalPeriod(arr) {
    //GM and earthRadius are both given to us.
    //To make the code easier to edit and read, each part of the equation is written separately.
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    //a is 2 times pi. The part that is a constant is on the global scope while the rest is part of a function.
    var a = 2 * Math.PI;
    //Create newArr to store the orbPeriod's.
    var newArr = [];
    //Create a function, gerOrbPeriod() that will do the required work for any amount of objects.
    var getOrbPeriod = function(obj) {
        //c is (earthRadius + avgAlt) to the cube.
      var c = Math.pow(earthRadius + obj.avgAlt, 3);
      //b is the square root of c divided by GM.
      var b = Math.sqrt(c / GM);
      //Create orbPeriod to store the product of a and b, with the Math.round() function applied to round up to the next whole number.
      var orbPeriod = Math.round(a * b);
      //Then we delete the key avgAlt, and add the new key and its value.
      delete obj.avgAlt;
      obj.orbitalPeriod = orbPeriod;
      return obj;
    };
  
    for (var elem in arr) {
      newArr.push(getOrbPeriod(arr[elem]));
    }
  
    return newArr;
  }
  
  // test here
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

  //Method 2

  function orbitalPeriod(arr) {
      //GM and earthRadius are both given to us.
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
  
    // Loop through each item in the array arr
    // The forEach() method is used to execute the function once per element (item) in arr.
    arr.forEach(function(item) {
      // Calculate the Orbital period value
      // tmp holds the value of orbital period for each element calculated using the formula.
      var tmp = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM));
      //Delete the avgAlt property
      //The key avgAlt is deleted, and orbital period (tmp) found is assigned to the key orbitalPeriod.
      delete item.avgAlt;
      //Add orbitalPeriod property
      item.orbitalPeriod = tmp;
    });
    return arr;
  }
  
  // test here
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);