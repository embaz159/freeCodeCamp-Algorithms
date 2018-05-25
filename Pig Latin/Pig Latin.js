
function translatePigLatin(str) {
    // Make an empty string to hold your Pig Latin word.
    var pigLatin = '';
    // Assign your appropriate regular expression to a variable.
    var regex = /[aeiou]/gi;
  
    // If the first character is a vowel, just add way to end of string and return it.
    if (str[0].match(regex)) {
      pigLatin = str + 'way';
  // If the first character is not a vowel:
    } else {
  
      // Find number of consonants before first vowel with help of indexOf(), match() and regex.
      var vowelIndice = str.indexOf(str.match(regex)[0]);
  
      // Start Pig Latin string with first vowel till the end.
      // Add letters before first vowel to end of string.
      // substr() is used for string manipulation here.
      pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
    }
  // Add ay to end of string and return it.
    return pigLatin;
  }
  
  // test here
  translatePigLatin("consonant");
  