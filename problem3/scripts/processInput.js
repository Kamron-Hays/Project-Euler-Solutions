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
    resultElement.style.color = "red";
    resultElement.innerHTML = "Please enter a whole number value.";
  }
  else if ( value < 2 || value > 1e15 )
  {
    resultElement.style.color = "red";
    resultElement.innerHTML = "Please enter a whole number between 2 and 1e15.";
  }
  else
  {
    resultElement.style.color = "black";
    resultElement.innerHTML = "All Prime Factors: " + getPrimeFactors(value);
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