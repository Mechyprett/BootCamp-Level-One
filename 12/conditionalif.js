var age = Number(prompt("What is your age ?"));

if (age < 0) {
	console.log("Come back you're aout of the womb");
}

if(age === 21) {
	console.log("Happy 21st Birthday!");
}
// If age is odd
//(not evenly divisible by two)
if(age % 2 !== 0) {
 console.log("Your age is odd!");
}
 
// If age is a perfect square
if(age % Math.sqrt(age) === 0) {
  console.log("Your age is a perfect square!");
}