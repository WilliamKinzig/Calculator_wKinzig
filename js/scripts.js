//Business (or back-end) logic:

var add = function(num1,num2)
{
	return num1 + num2;
}

var subtract = function(num1,num2)
{
	return num1 - num2;
}

var divide = function(num1,num2)
{
	return num1 / num2;
}

var multiply = function(num1,num2)
{
	return num1 * num2;
}

// Everything below this line is user interface (or front-end) logic:

$(document).ready(function() {
  var number1 = parseInt(prompt("Enter a number:"));
  var number2 = parseInt(prompt("Enter another number:"));

	alert(add(number1,number2));
	alert(subtract(number1,number2));
	alert(multiply(number1,number2));
	alert(divide(number1,number2));
});
