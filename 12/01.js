function singSong() {
    console.log("Twinkle, twinkle, little start");
    console.log("How I wonder what you are");
    console.log("Up above the world so high");
    console.log("Like a diamond in the sky");
}

singSong();

//Arguments

function square(num) {
    console.log(num * num);
}

square(10); //prints 100


function sayHello(name) {
    console.log("hello there " + name + "!");
}

sayHello("Uris");

//Function can have as many arguments as needed

function area(length, width) {
    console.log(length * width);

}

area(9, 2); //18

function greet(person1, person2, person3) {
    console.log("hi " + person1);
    console.log("hi " + person2);
    console.log("hi " + person3);

}

greet("Jerry", "Ron", "Edwart");

function square(x) {

    return x * x;
}
square(4);

// this function capitalizes the first char in a string:

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);

}

var city = "paris"; //"paris"
var capital = capitalize(city); //Paris

function capitalize(str) {
    if (typeof str === "number") {
        return "that's no a string"
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

var city = "paris"; //"paris"
var capital = capitalize(city); //Paris

var num = 37;
var capital = capitalize(num); //"that's not a string!"

//function declaration
function capitalize(str){
	return str.charAt(0).toUpperCase() + str.slice(1);
}

//function expression
function capitalize = function(str) {
	return str.charAt(0).toUpperCase()  + str.slice(1);
}

