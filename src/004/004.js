// A palindromic number reads the same both ways. The largest palindrome made
// from the product of two 2-digit numbers is 9009 = 91 × 99.
//
// Find the largest palindrome made from the product of two 3-digit numbers.
function getLargestPalindrome(numDigits)
{
  if ( numDigits < 2 ) { return 0; }

  let largestPalindrome = 0;
  let lower = 10 ** (numDigits - 1);
  let upperStr = "";
  for (let s = 0; s < numDigits; s++) { upperStr += '9'; }
  let upper = parseInt(upperStr);

  for (let i = lower; i <= upper; i++)
  {
    for (let j = lower; j <= upper; j++)
    {
      let product = i * j;
      let productString = product.toString();

      // There is no built-in method for reversing a string.
      // But there is one for reversing an array.
      if ( productString === productString.split("").reverse().join("") )
      {
        // Found a palindrome. Is it the largest?
        if ( product > largestPalindrome )
        {
          largestPalindrome = product;
        }
      }
    }
  }
  
  return largestPalindrome;
}

console.log( getLargestPalindrome(2) == 9009 );
console.log( getLargestPalindrome(3) );
