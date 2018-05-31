var add = function(num1,num2) {
	return num1 + num2;
}

var subtract = function(num1,num2) {
	return num1 - num2;
}
var divide = function(num1,num2) {
	return num1 / num2;
}
var multiply = function(num1,num2) {
	return num1 * num2;
}
var number1 = parseInt(prompt("Enter first number"));
var number2 = parseInt(prompt("Enter second number"));


alert(add(number1,number2));

alert(subtract(number1,number2));

alert(multiply(number1,number2));

alert(divide(number1,number2));
