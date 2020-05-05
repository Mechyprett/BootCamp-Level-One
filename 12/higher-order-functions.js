//152
//como pasar una funcion a otra 
//setInterval()

function sing() {
    Console.log("twinkle twinkle...");
    console.log("how I wonder ...");
}
//setInterval(anotherFunc, interval)
//            fucntion name, the time in milesegundos 1000 
setInterval(sing, 1000);

//Funcion Anonima no le daremos un nombre porque 
//no la utilizaremos mas 
setInterval(function () {
    console.log("soy una funcion anonima!");
    console.log("THIS IS AWESOME!");
}, 2000);

//para detenerlo escribimos clearSetInternal(el numero que dio );