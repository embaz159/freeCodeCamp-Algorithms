/*We start off by creating two arrays with default conversion with matching indices. These are called decimalValue and romanNumeral. We also create an empty string variable, romanized, which will house the final roman number.*/
var convertToRoman = function(num) {

    var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
    var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
  
    var romanized = '';
  /*Using a for loop, we loop through the indicies of the decimalValue array. We continue to loop until while the value at the current index will fit into num.*/
    for (var index = 0; index < decimalValue.length; index++) {
      while (decimalValue[index] <= num) {
        //Next, we add the roman numeral and decrease num by the decimal equivalent.
        romanized += romanNumeral[index];
        num -= decimalValue[index];
      }
    }
  //Finally, we return the value of romanized.
    return romanized;
  }
  
  // test here
  convertToRoman(36);