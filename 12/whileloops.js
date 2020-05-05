console.log("printing all numbers betwen -10 and 19 ");

var counter = -10;

while(counter < 20){
	console.log(counter);
	counter++;
}

console.log("printing all even numbers betwen 10 and 40 ");

var counter = 10;
while(counter < 41){
	console.log(counter);
	counter++;
}

//while(counter <= 40) {
//	if(counter % 2 === 0){
//		console.log(counter);
//	}
//	counter+=1;
//}

console.log("printing all ood numbers betwen 300 and 303 ");

var counter = 300;
while(counter < 333){
	console.log(counter);
	counter++;
}

while(counter <= 333) {
	if(counter % 2 !== 0){
		console.log(counter);
	}
	counter+=1;
}

console.log("printing all numbers divisible by 5 AND 3 betwen 5 and 50");

var counter = 5;

while(counter <= 50) {
	if(counter % 5 === 0 && counter % 3 === 0){
		console.log(counter);
	}
	counter+=1;
}