function truncateString(str, num) {
    // First we start off with a simple if statement to determine one of three outcomes…
    if (str.length > num && num > 3) {
         /*If our string length is greater than the num we want to truncate at, and our truncate point is at least three characters or more into the string, we return a slice of our string starting at character 0, and ending at num - 3. We then append our '...' to the end of the string.*/
      return str.slice(0, (num - 3)) + '...'; 
      /*However, if our string length is greater than the num but num is within the first three characters, we don’t have to count our dots as characters. Therefore, we return the same string as above, with one difference: The endpoint of our slice is now just num.*/
    } else if (str.length > num && num <= 3) {
      return str.slice(0, num) + '...';
      /*Finally, if none of the above situations are true, it means our string length is less than our truncation num. Therefore, we can just return the string.*/
    } else {
      return str;
    }
  
  }