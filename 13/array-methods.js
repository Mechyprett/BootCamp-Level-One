// Chapter 155

//PUSH AND POP

//use push to add to the end of an array:

var colors = ["red", "orange", "yellow"];
colors.push("green");
//["red","orange", "yellow", "green"]

//Use pop to remove the last item in an array

var colors = ["red", "orange", "yellow"];
colors.pop();
//["red", "orange"]

//pop() returns the removed element
var col = colors.pop(); //orange 

//SHIFT AND UNSHIFT

//Use unshift to add to the front of an array:
var colors = ["red", "orange", "yellow"];
colors.unshift("infrared")
//["infrared", "red", "orange", "yellow"]

//Use shift to remove the first item in an array 
var colors = ["red", "orange", "yellow"];
colors.shift();
//["orange", "yellow"]

//shift () also returns the removed element 
var col = colors.shift();

//INDEXOF

//Use indexOf() to find the index of an item in an array
var friends = ["charlie", "Liz", "David", "Matias", "Liz"];

//returns the first index at which a given element can be found
friends.indexOf("David"); //2
friends.indexOf("Liz"); //1, not 4

//returns -1 if the element is not present.
friends.indexOf("Hangrid"); //-1

//SLICE 
//Use slice() to copy parts of an array 

var fruits = ['Banaba', 'Orange', 'Lemon', 'Apple', 'Mango'];
//use slice to copy the 2nd and 3 d fruits
//specify index where the new array starts(1) and ends(3)
var citrus = fruits.slice(1, 3);

//this does not alter the original fruits array 
//citrus contains ['Orange', 'Lemon']
//fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']

//you can also use slice() to copy an entire array
var nums = [1, 2, 3];
var otherNums = nums.slice();
//both arrays are [1,2,3]