function canBePalindrome(arr) {
    var arr = arr;
    var letterCounts = {};
    var letter;
    var palindromeSum = 0;
    var newArr = [];
    var oddLetter = '';


arr.forEach( function(str) {
  console.log(str);
    // Loop over the string an make a count of each char occurance
    for (var i = 0; i < str.length; i++) {
      console.log(str[i]);

        letter = str[i].split('');
      //  console.log(letter);
        letterCounts[letter] = letterCounts[letter] || 0;
        letterCounts[letter]++;
      //  console.log(letterCounts[letter]);
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
  })
}
canBePalindrome(['abcca','gghh']);
