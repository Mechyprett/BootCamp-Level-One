//154
//Suppose I wanted to model a group of friends 
var friend1 = "Charlie";
var friend2 = "Liz";
var friend3 = "David";
var friend4 = "Matias";

//This is a lot of code, and it doesn't let us group the friends together

//This is a perfect use case for an ARRAY

var friends = ["Charlie", "Liz", "David", "Matias"];

// Se puede agregar mas nombre al arreglo 
// haciendo lo siguiente 
var friends = ["Charlie", "Liz", "David", "Matias"];
friends[4] = "Amelie"; // aqui agregamos una posicion que no existe con el nuevo objeto para la lista 

//We can initialize an ampy array two ways:
var friends = []; //no friends :(
var friends = new Array() //uncommon

//Arrat can hold any type of data
var random_collection = [49, true, "Hermione", null];

//Arrays have a length property 
var nums = [45, 37, 98, 24];
nums.length //4