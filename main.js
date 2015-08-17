// A function that returns true for palindrome words.

function palindrome(str) {
    var len = str.length;
    for ( var i = 0; i < Math.floor(len/2); i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
// A function that checks if a string can be a palindrome.

function canBePalindrome(str)
{
    // set the string to lower case first
    var str = str.toLowerCase();

    var letterCounts = {};
    var letter;
    var palindromeSum = 0;

    for (var i = 0; i < str.length; i++) {
        letter = str[i];
        letterCounts[letter] = letterCounts[letter] || 0;
        letterCounts[letter]++;
    }

    for (var letterCount in letterCounts) {
        palindromeSum += letterCounts[letterCount] % 2;
    }

    return palindromeSum < 2;
}

canBePalindrome('aaa'); // true
canBePalindrome('aa1'); // true
canBePalindrome('aA1'); // true
canBePalindrome('aabb'); // true
canBePalindrome('aabbc'); // true
canBePalindrome('abbc'); // false

// Given a string, a function that can reorganize it into a Palindrome. If it is not a palindrome, return -1

function canBePalindrome(str) {
    // set the string to lower case first
    var str = str.toLowerCase();

    var letterCounts = {};
    var letter;
    var palindromeSum = 0;
    var newArr = [];
    var oddLetter = '';

    // Loop over the string an make a count of each char occurance
    for (var i = 0; i < str.length; i++) {
        letter = str[i];
        letterCounts[letter] = letterCounts[letter] || 0;
        letterCounts[letter]++;
    }

    // Create a method to check if the string can be a palindrome
    for (var letterCount in letterCounts) {
        palindromeSum += letterCounts[letterCount] % 2;
    }

    // If the string CAN be a palindrome...
    if (palindromeSum < 2) {

      // Loop through the letterCounts object
      for (var letter in letterCounts) {
        // If the char occures an EVEN number of times...
        if( letterCounts[letter] % 2 === 0) {
          // Loop over that char count so you can insert them into the array
          for(var i=0; i< letterCounts[letter]; i++) {
            // Insert the EVEN chars to the middle of the array
            newArr.splice(newArr.length/2, 0, letter);
          }
        }
        // If the char has an ODD number of occurances..
        if (letterCounts[letter] % 2 !== 0) {
          // Loop over that char to get the full count
          for(var i=0; i< letterCounts[letter]; i++) {
            // Save the One odd set of char(s) to insert last
            // Save it in a temporary string
            oddLetter += letter;
          }
        }
        // When all the even count chars have gone in, push the Odd char(s) in
        if(str.length == (newArr.length + oddLetter.length)) {
          newArr.splice(newArr.length/2, 0, oddLetter);
        }
      }
      return newArr.join('');

    } else {
      return -1;
    }

}
canBePalindrome('babccab'); //'acbbbca'
canBePalindrome('abca'); // -1

// Given an array of strings now, this function can reorganize all of them into Palindromes. If it is not a palindrome, return -1 for that value

function canBePalindromeArray(arr) {

  var finalArr = [];

  // Iterate over the array list
  // Could use a for loop but this is easier
  arr.forEach( function(str) {

    var letterCounts = {};
    var letter;
    var palindromeSum = 0;
    var newArr = [];
    var oddLetter = '';

    // Loop over the string an make a count of each char occurance
    for (var i = 0; i < str.length; i++) {
        letter = str[i].split('');
        letterCounts[letter] = letterCounts[letter] || 0;
        letterCounts[letter]++;
    }

    // Create a method to check if the string can be a palindrome
    for (var letterCount in letterCounts) {
        palindromeSum += letterCounts[letterCount] % 2;
    }

    // If the string CAN be a palindrome...
    if (palindromeSum < 2) {

      // Loop through the letterCounts object
      for (var letter in letterCounts) {

        // If the char occures an EVEN number of times...
        if( letterCounts[letter] % 2 === 0) {

          // Loop over that char count so you can insert them into the array
          for(var i=0; i< letterCounts[letter]; i++) {

            // Insert the EVEN chars to the middle of the array
            newArr.splice(newArr.length/2, 0, letter);
          }
        }

        // If the char has an ODD number of occurances..
        if (letterCounts[letter] % 2 !== 0) {

          // Loop over that char to get the full count
          for(var i=0; i< letterCounts[letter]; i++) {
            // Save the One odd set of char(s) to insert last
            // Save it in a temporary string
            oddLetter += letter;
          }
        }
        // When all the even count chars have gone in, push the Odd char(s) in
        if(str.length == (newArr.length + oddLetter.length)) {
          newArr.splice(newArr.length/2, 0, oddLetter);
        }
      }
      finalArr.push(newArr.join(''));
    } else {
      finalArr.push(-1);
    }
  });
  return finalArr;
}
canBePalindromeArray(['abcac', 'abc', 'gshgh', 'dd ff']);
