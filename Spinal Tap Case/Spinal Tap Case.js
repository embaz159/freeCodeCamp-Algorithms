// Method 1
function spinalCase(str) {
    // Create a variable for the white space and underscores.
    // regex contains the regular expression /\s+|_+/g, which will select all white spaces and underscores.
    var regex = /\s+|_+/g;
  
    // Replace low-upper case to low-space-uppercase
    /* The first replace() puts a space before any encountered uppercase characters in the string str so that the spaces can be replaced by dashes later on.*/
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  
    // Replace space and underscore with -
    // While returning the string, another replace() replaces spaces and underscores with dashes using regex.
    return str.replace(regex, '-').toLowerCase();
  }
  
  // test here
  spinalCase('This Is Spinal Tap');
  
  // Method 2
  
  function spinalCase(str) {
    // Split the string at one of the following conditions (converted to an array)
    // a whitespace character [\s] is encountered
    // underscore character [_] is encountered
    // or is followed by an uppercase letter [(?=[A-Z])]
    // Join the array using a hyphen (-)
    // Lowercase the whole resulting string
    return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase()
  }
  