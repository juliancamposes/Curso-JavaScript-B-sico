// Operador .valueOf() -> Obtener valores númericos a partir de literales

    //Podemos inicializar de dos formas los números

let a = 2;
let b = new Number(3); //se sigue comportando como número 3, se utiliza poco

    //podemos pasar el objeto b a valor númerico con valueOf, pero esto lo hace automáticamente
    //el intérprete
console.log(b.valueOf);
    //vamos que es un poco absurdo hacer esto

// NaN - Infinity : NaN va a ser el resultado que nos de cuando intentemos pasar un valor no númerico 
// como number
// Infinity lo devolverá cuando dividimos algo entre 0
let n = Number('Adios');
console.log(n); //NaN
console.log(isNaN(n)) //devuelve true si es NaN (para controlar error)

let numerador = 19;
let divisor = 0;

console.log(numerador / divisor) //devuelve Infinity
console.log(isFinite(numerador / divisor)) //devuelve false al ser Infitiny


// Cómo convertir Strings a valores númericos con parseInt y parseFloat

let n_string = "3";
let n_number = parseInt(n_string);
console.log(n_number);
console.log(typeof n_number);//devuelve number

let n_float_string = "3.123";
let n_float_number = parseFloat(n_float_string);

    //podemos usarlo para obtener la parte entera
let n_int_entero = parseInt(n_float_number);
console.log(n_int_entero); //imprime 3

// Números hexadecimales (base 16) -> no son floats
let numHex = '0x3a5b7';
let numDec = parseInt(numHex);

