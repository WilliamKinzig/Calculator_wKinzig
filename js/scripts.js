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
  $("form#add").submit(function(event) {
  var number1 = parseInt($("#add1").val());
  var number2 = parseInt($("#add2").val());
  alert(add(number1, number2));
	$("#output").text(result);
	alert(subtract(number1,number2));
	alert(multiply(number1,number2));
	alert(divide(number1,number2));
});
});
