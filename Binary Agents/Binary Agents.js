
function binaryAgent(str) {
    // Separate the string into an array of strings separated by whitespace.
    biString = str.split(' ');
    uniString = [];
  
  /*using the radix (or base) parameter in parseInt, we can convert the binary
    number to a decimal number while simultaneously converting to a char*/
  
    for(i=0;i < biString.length;i++){
      uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
    }
    
    // we then simply join the string
    return uniString.join('');
  }
  
  // test here
  binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
  