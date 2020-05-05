//isEven
//function isEven(num){
//return true if even
//if(num % 2 === 0){
//		return true;
//	} 
//return false otherwise
//	else {
//		return false
//	}
//}

//isEven() problem  solution
//Write a function isEven() which takes a single numeric
// argument and returns true if the number is even,and false otherwise.
function isEven(num) {
	return num % 2 === 0;
	//return true if even
	//return false otherwise

}
//write a function factorial() which takes a single numeric 
//argument and returns the factorial of that number 
function factorial(num) {
	//define a result 
	var result = 1;
	//calculate factorial and store value in result 
	for (var i = 2; i <= num; i++) {
		result *= i;
		//	result = result * i; es lo mismo que lo de arriba pero mas corto
	}
	//return the result variable
	return result;
}

//factorial(4)  4 x 3 x 2 x 1
//aqui lo hara alreves

function factorial(num) {

	//define a result 
	var result = num;
	//calculate factorial and store value in result 
	for (var i = num; i >= num; i--) {
		result *= i;
		//	result = result * i; es lo mismo que lo de arriba pero mas corto
	}
	//return the result variable
	return result;
}

//Write a function kebabToSnake() wich takes a single 
//kebab-cased 
//string argument and returns the snake_case version
//Basically, replace "-"s with "_"s

function kebabToSnake(str) {
	//replace all '-' with "_" s
	var newStr = str.replace(/-/g, "_");
	//return str
	return newStr;
}