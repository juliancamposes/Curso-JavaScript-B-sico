//Son estructuras que nos van a permitir seguir por un camino u otro dependiendo de una condición
//if nos va a servir para ejecutar un código si una condición se cumple

//Podemos analizar una variable boolean
var condicion = true;

if(condicion){
    var mostrar = "La condición es true";
} else {
    var mostrar = "La condición es false";
}

console.log(mostrar);

//Podemos analizar una comparación que devolverá true o false

var numeroIf = 3;
if(numeroIf == 3){
    console.log("El numero es 3");
} else {
    console.log("El numero no es 3");
}

var numero = 2;

//Podemos hacer concatenaciones de if-else

if(numeroIf == 1){
    console.log("El numero es 1");
} else if (numeroIf == 2){
    console.log("El numero es 2");
} else if (numeroIf == 3){
    console.log("El numero es 3");
} else {
    console.log("El numero no es ni 1, ni 2, ni 3");
}

//El switch nos permite analizar una variable y poner qué hacer en los diferentes casos
//Si no se cumple ningún caso, podemos usar el default que se lanzará si no hay coincidencia
//Es como si vamos concatenando varios if else if..

switch(numero){
    case 0:
        var mostrarNumero = "El numero es 0";
        break;
    case 1:
        var mostrarNumero = "El numero es 1";
        break;
    default:
        var mostrarNumero = "El numero no es ni 0 ni 1";
}

console.log(mostrarNumero);