// Find the sum of all the multiples of 3 or 5 below the specified value.
// For example, if we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
function sumMultiples(numbers, max)
{
  var sum = 0;

  if ( numbers )
  {
    for (var i = 1; i < max; i++)
    {
      for (var j = 0; j < numbers.length; j++)
      {
        if ( i % numbers[j] == 0 )
        {
          sum += i;
          break;
        }
      }
    }
  }

  return sum;
}

console.log( sumMultiples(null, 10) == 0 );
console.log( sumMultiples([3], 10) == 18 );
console.log( sumMultiples([5], 10) == 5 );
console.log( sumMultiples([3,5], 10) == 23 );
console.log( sumMultiples([3,5], 1000) == 233168 );
