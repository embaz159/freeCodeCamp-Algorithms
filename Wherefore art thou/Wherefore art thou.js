
function whatIsInAName(collection, source) {
    // "What's in a name? that which we call a rose
    // By any other name would smell as sweet.”
    // -- by William Shakespeare, Romeo and Juliet
    var srcKeys = Object.keys(source);
  
    // We filter through the array using .filter().
    return collection.filter(function (obj) {
      //Using a for loop we loop through each item in the object.
      for(var i = 0; i < srcKeys.length; i++) {
      /* We use a if statement to check if the object in the collection 
        doesn’t have the key and the property value doesn’t match the value in source.*/
        if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
          return false;
        }
      }
      //We return false if the above if statement is correct. Otherwise, we return true;
      return true;
    });
  }
  
  // test here
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });