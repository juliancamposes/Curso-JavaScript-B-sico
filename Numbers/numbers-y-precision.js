//Numbers
//Los enteros y decimales se declaran de la misma forma

let a = 5; //int
let b = 0.1; //float

//Precisión
let c = 0.2;

console.log(b+c); //no es 0.3 exacto, pasa por cómo está almacenado en memoria el dato
//pasa con todo tipo de operaciones

//Un truco para arreglarlo es el siguiente:

let redondeo = Math.round((0.1 + 0.2) * 100 / 100);
console.log(redondeo);
