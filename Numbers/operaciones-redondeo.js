//Principales operaciones aritméticas

let a = 3.5;
let b = 4.8;
    //Suma
let suma = a + b;
    //Resta
let resta = a - b;
    //Multiplicacion
let multiplicacion = a * b;
    //Division
let division = a / b;
    //Resto
let resto = a % b;
    //Potencia
let potencia = a ^ b;

//Representación de los números en cadenas de texto

let a_string = a.toString();
console.log(typeof a_string);

//Redondeo de números decimales
let c = 3.3;
let d = c * 3;

// toFixed(numero de decimales que queremos)
//Limita el número de decimales al valor x
//no redondea, lo que hace es corta el string
//el typeof es un STRING
console.log(d.toFixed(0));
console.log(d.toFixed(1));
console.log(typeof d.toFixed(2));

//.toPrecision(x) 1 > x < 100
//le pasamos el número de cifras significativas que queremos tener
//empezando por la parte entera
//devuelve también un STRING
let e = 1839.1234567890
console.log(e.toPrecision(1)); //devuelve 1
console.log(e.toPrecision(7)); //devuelve 1839.123
console.log(typeof e.toPrecision(2));