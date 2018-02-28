// Returns all prime factors of the specified positive integer.
//
// Given:
//   * all positive integers (greater than 1) are composed of a unique set of prime factors
//   * the number 2 is the only even number that is prime
//   * there cannot be a prime factor greater than the square root of a number
//   * the smallest factor (besides 1) of any number is always prime
//
// General algorithm:
//   1) Find the smallest factor of the current number. It will be prime. Add it to the list of prime factors.
//   2) Divide the current number by this prime factor. The resulting number becomes
//      the new "current" number, and is composed of all remaining prime factors.
//   3) Repeat step 2 as long as the factor evenly divides into the current number, each time adding
//      the factor to the list of prime factors.
//   4) Repeat steps 1-3, searching for the next-smallest factor until the current number equals 1.
//   5) If the square of the next-smallest factor is greater than the current number, then the current number
//      is the largest (and final) prime factor (assuming it's not 1). Add it to the list of prime factors.
function getPrimeFactors(number)
{
    var factors = [];
    var divisor = 2;

    while ( number % divisor === 0 )
    {
      factors.push(divisor);
      number /= divisor;
    }

    ++divisor;

    while ( number > 1 )
    {
      while ( number % divisor === 0 )
      {
        factors.push(divisor);
        number /= divisor;
      }

      divisor += 2;

      if ( divisor * divisor > number )
      {
        if ( number > 1 ) { factors.push(number); }
        break;
      }
    }

    return factors;
}