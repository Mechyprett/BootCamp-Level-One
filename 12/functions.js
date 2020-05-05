function singSong() {
	console.log("Twinkle, twinkle, little start");
	console.log("How I wonder what you are");
	console.log("Up above the world so high");
	console.log("Like a diamond in the sky");
}

singSong();

function greet(person1, person2, person3){
	console.log("hi " + person1);
	console.log("hi " + person2);
	console.log("hi " + person3);

}

greet();

function square(x) {

	console.log(x*x);
}
square();

function square(x) {
	return x * x ;
}

"4 squared is: " + square(4)
var result = square(104);
// this function capitalizes the first char in a string:

function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
		
}

var city = "paris";
var capital = capitalize(city);

//we can capture the returned value in a variable

function capitalize(str) {
	if(typeof str === "number"){
		return "that's not a string!"
	}
	return str.charAt(0).toUpperCase() + str.slice(1);
}

var city = "paris";
var capital = capitalize(city);

var num = 37;
var capital = capitalize(num);

//function declaration
function capitalize(str){
	return str.charAt(0).toUpperCase() + str.slice(1);
}

//function expression
function capitalize = function(str) {
	return str.charAt(0).toUpperCase()  + str.slice(1);
}



//quizz

function test(x,y){
	return y-x;
}
test(10,40);

function test(x) {
	return x*2;
	console.log(x);
	return x/2;
}

test(40);
kebabtosnake