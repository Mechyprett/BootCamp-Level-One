//chaper 150
function doMath() {
  var x = 40;
  console.log(x);
} //child scope

var num = 8;
function doMath() {
  num += 1;
  if (num % 5 == 0) {
    return true;
  } else {
    return;
  }
}

num += 1;
doMath();
//las variables que son definidas dentro de una funcion no
//son accesibles fuera de una funcion
