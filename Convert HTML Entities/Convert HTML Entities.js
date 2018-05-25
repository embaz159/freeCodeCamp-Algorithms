// Method 1
function convertHTML(str) {
    // Split by character to avoid problems.
  
    var temp = str.split('');
  
    // Since we are only checking for a few HTML elements use a switch statement
  
    for (var i = 0; i < temp.length; i++) {
      switch (temp[i]) {
        case '<':
          temp[i] = '&lt;';
          break;
        case '&':
          temp[i] = '&amp;';
          break;
        case '>':
          temp[i] = '&gt;';
          break;
        case '"':
          temp[i] = '&quot;';
          break;
        case "'":
          temp[i] = "&apos;";
          break;
      }
    }
  
    temp = temp.join('');
    return temp;
  }
  
  //test here
  convertHTML("Dolce & Gabbana");
  
  // Method 2
  
  function convertHTML(str) {
    // Use Object Lookup to declare as many HTML entities as needed.
    var htmlEntities = {
      '&':'&amp;',
      '<':'&lt;',
      '>':'&gt;',
      '\"':'&quot;',
      '\'':"&apos;"
    };
    //Use map function to return a filtered str with all entities changed automatically.
    return str.split('').map(function(entity){
      return htmlEntities[entity] || entity;
      // Lastly we join all the characters once again.
    }).join('');
  }
  
  // test here
  convertHTML("Dolce & Gabbana");
  