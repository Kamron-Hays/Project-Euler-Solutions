// Find the largest prime factor of a number.
function findLargestPrimeFactor(number)
{
  var largestPrimeFactor;

  if ( number%2 === 0 )
  {
    largestPrimeFactor = 2;
  }
  
  // There are no factors above half the number's size.
  var half = number/2;

  // 2 is the only even prime, so skip all other even numbers
  for (i=3; i <= half; i+=2)
  {
    if ( number%i === 0 )
    {
      var isPrime = true; // initial assumption

      // Found a factor. See if it's prime.
      for (j=3; j <= half; j+=2)
      {
        if ( number%j === 0 )
        {
          // This factor has a factor, so it's not prime.
          isPrime = false;
          break;
        }
      }

      if ( isPrime )
      {
        largestPrimeFactor = i;
      }
    }
  }
  
  return factors;
}