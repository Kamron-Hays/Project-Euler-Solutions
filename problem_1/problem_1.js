// Find the sum of all the multiples of 3 or 5 below the specified value.
// For example, if we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
function sumMultiplesOf3and5(number)
{
  var sum = 0;
    
  for (var i = 0; i < number; i++)
  {
    if ( (i % 3 === 0) || (i % 5 === 0) )
    {
      sum += i;
    }
  }

  return sum;
}

function isInteger(number)
{
  return !isNaN(number) &&
         parseInt(Number(number)) == number && 
         !isNaN(parseInt(number, 10));
}

function processInput()
{
  var value = valueElement.value;
  var resultElement = document.getElementById('result');

  if ( !isInteger(value) )
  {
    resultElement.innerHTML = "Error: Please enter an integer value.";
  }
  else if ( value < 0 || value > 1000000 )
  {
    resultElement.innerHTML = "Error: Please enter an integer between 0 and 1000.";
  }
  else
  {
    resultElement.innerHTML = "Result: " + sumMultiplesOf3and5(value);
  }
}

var valueElement = document.getElementById('value');

addEventListener("keyup", function(event)
{
  if ( event.keyCode === 13 )
  {
    processInput();
  }
});