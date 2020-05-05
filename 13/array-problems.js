//chapter 163

//printReverse ()
//Write a function printReverse() that takes an array as an
//argument and prints out the elements in the array
//in reverse order(don't actually reverse the array itself)
function printReverse(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);

    }
}

printReverse([3, 6, 2, 5]);

//isUniform()
//write a function isUniform() wich takes and array as
//an argument and returns true if all elements in
//the array are identical

function isUniform(arr) {
    var first = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== first) {
            return false;
        }

    }

    return true;
}


 
isUniform([2, 2, 2, 2]);

/*
function isUniform(arr) {
    var first = arr[0];
    arr.forEach(function(element){
        if(element !== first){
            return false;
        }
    });

    return true;
}

*/



//sumArray()
//write a Function sumArray() that accepts a array of numbers
//and returns the sum of all numbers in the array

function sumArray() {
    var total = 0;
    arr.forEach(function(element){
        total += element;
    });
    return total;

}


//Max()
//write a function max() that accepts an array of numbers and 
//returns the maximum number in the array

function max(){
    var maximo = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

var nums = [45, 65, 77,34]

nums.forEach(function(num){
    console.log(num);

});