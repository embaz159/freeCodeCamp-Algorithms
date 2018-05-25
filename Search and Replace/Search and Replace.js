function myReplace(str, before, after) {
    // Use indexOf() to find location of before in string.
    var index = str.indexOf(before);
    // If first letter of before is capitalized, change first letter of after to uppercase.
    if (str[index] === str[index].toUpperCase()) {
      // Change the after word to be capitalized before we use it.
      after = after.charAt(0).toUpperCase() + after.slice(1);
    }
    // Replace before in the string with after.
    str = str.replace(before, after);
  // Return the new string.
    return str;
  }
  
  // test here
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");