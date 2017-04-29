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
    resultElement.innerHTML = "Error: Please enter an integer value.";
  }
  else if ( value < 0 || value > 1000000 )
  {
    resultElement.style.color = "red";
    resultElement.innerHTML = "Error: Please enter an integer between 0 and 1000000.";
  }
  else
  {
    resultElement.style.color = "black";
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
