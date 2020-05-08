//GetElementById
//Takes a string argument and returns the one element with a matching ID
var tag = document.getElementById("highlight");
//tag


//getElementsByClassName
/**TAKES A STRING ARGUMENT AN RETURNS A LIST OF
 * ELEMENTS THAT HAVE MATCHING CLASS*/

var tag1 = document.getElementsByClassName("bolded");
console.log(tags[0]);

//getElementByTagName
/*Return a list of all elements of a given tag name,
* like <li> or <h1>*/

var tag2 = document.getElementsByTagName("li");
console.log(tag2[0]);

//querySelector
/*Returns the first element that matches a given
* CSS-style selector ( SE PUEDEN SELECCIONAR CUALQUIER ELEMENTO
* COMO CLASESE LLAMAR ELEMENETOS Y UNA CLASE )*/

var tag3 = document.querySelector("#highlight");
var tag3 = document.querySelector("li a.special");

//querySelectorAll
/*Return a list of elements thet matches a given
CSS_Style selector
* */
var tags = document.querySelectorAll("hi");
