// Method 1
function pairElement(str) {
    // Return each strand as an array of two elements, the original and the pair.
    var paired = [];
  
    // Function to check with strand to pair.
    var search = function(char) {
      switch (char) {
        case 'A':
          paired.push(['A', 'T']);
          break;
        case 'T':
          paired.push(['T', 'A']);
          break;
        case 'C':
          paired.push(['C', 'G']);
          break;
        case 'G':
          paired.push(['G', 'C']);
          break;
      }
    };
  
    // Loops through the input and pair.
    for (var i = 0; i < str.length; i++) {
      search(str[i]);
    }
  
    return paired;
  }
  
  // test here
  pairElement("GCG");
  
  // Method 2
  
  function pairElement(str) {
    //First define a map object with all pair possibilities, this allows us to easily find by key or value.
    var map = {T:'A', A:'T', G:'C', C:'G'};
    //Split str into a characters array so we can use each letter to find its pair.
    strArr = str.split('');
    /* Use a loop to go throw the array of characters and replace each character 
    by an array of the pair, thus creating 2d arrays.*/
    for (var i=0;i<strArr.length;i++){
      strArr[i]=[strArr[i], map[strArr[i]]];
    }
   return strArr;
  }
  
  // test here
  pairElement("GCG");
  