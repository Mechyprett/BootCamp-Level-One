//Chapter 159

//For-loop

var colors = ["red", "orange", "yellow", "green"];

for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]);

}

//ForEach

//arr.forEach(someFunction)

var colors = ["red", "orange", "yellow", "green"];

colors.forEach(function (color) {
    //color is a placeholde, call it whatever ypu want
    console.log(color);
});

function printColor(color) {
    console.log("**************");
    console.log(color);
    console.log("**************");
}

printColor("purple")
colors.forEach(printColor);

printColor(colors[0])

//while loop lo mismo 

var count = 0;
while (count < colors.length) {
    console.log(colors[count]);
    count++;
}