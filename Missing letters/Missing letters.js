// Method 1
function fearNotLetter(str) {
    // use a for loop.
      for(var i = 0; i < str.length; i++) {
        /* code of current character */
        //Code of encountered character is stored in code.
        var code = str.charCodeAt(i);
    
        /* if code of current character is not equal to first character + no of iteration
        hence character has been escaped */
        if (code !== str.charCodeAt(0) + i) {
    
          /* if current character has escaped one character find previous char and return */
          return String.fromCharCode(code - 1);
        }  
      }
      //undefined is returned if there is no missing character in the string.
      return undefined;
    }
    
    // test here
    fearNotLetter("abce");
    
    
    // Method 2
    
    function fearNotLetter(str) {
      // A new string allChars is created.
      var allChars = '';
      // Create a regular expression notChars which selects everything except str.
      var notChars = new RegExp('[^'+str+']','g');
      // The for loop is used to add all the letters in the range to allChars.
      for (var i = 0; allChars[allChars.length-1] !== str[str.length-1] ; i++)
        allChars += String.fromCharCode(str[0].charCodeAt(0) + i);
      // match() is used to strip off the str letters from the newly created string and it is returned.
      // If there are no missing characters, return undefined.
      return allChars.match(notChars) ? allChars.match(notChars).join('') : undefined;
    }
    
    // test here
    fearNotLetter("abce");