//I could use an array like this:

var person = ["Cindy", 32, "Missoula"];

//to retrieve the person's hometown:
person[2] //this is not every meaningful code

//what if I accidentally reversed the order?
var person2 = ["Travis", "Los Angeles", 21];


//THIS IS A PERFECT USE CASE FOR AN OBJECT

var person = {
    name: "Cindy",
    age: 32,
    city: "Missoula"
}

var person = {
    name: "Travis",
    age: 21,
    city: "LA"

};

//bracket notation, similar to arrays:
console.log(person["name"]);
//dot notation
console.log(person.name);

//You cannot use dot notation if the property starts with a number
someObject.lblah //INVALID
someObjet["lblah"] //VALID!

//you can lookup using a variable with bracket notation
var str = "name";
someObject.str //doesn't look for "name"
someObjet[str] //does evaluate str and looks for "name"

//you cannot use dot notation for property names with spaces
//   SomeObject.fav color //INVALID
someObjet["fav color "]; //VALID

//UPDATING DATA
/*Just like an array: access a property nad reassign it*/

var person ={
    name:"Travis",
    age:21,
    city: "LA"
};

//TO UPDATE AGE
person["age"] += 1;
//TO UPDATE CITY
person.city ="London";

/*CREATING OBJECTS*/
//Like arrays, there are a few methods of initializing objects

//make an empty object and then add to it

var person = {}
person.name ="Travis";
person.age =21;
person.city = "LA";

//All at once
var person ={
    name:"Travis",
    age:21,
    city:"LA"
};


//another way of initializing an object
var person = new object();
person.name ="Travis";
person.age = 21;
person.city = "LA";



