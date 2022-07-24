//Para unir dos listas usaremos el método .concat

let array1 = [0,1,2,3]
let array2 = [4,5,6,7]
let array3 = array1.concat(array2);

//Como unir dos listas con el factor de propagacion (también aplicables a objetos)
console.log(...array3); //imprime cada valor del array por separado

let array4 = [...array1, ...array2]; //concatena los dos arrays
console.log(array4);

//ERROR: Mal entendido el concepto del factor de propagación
let array5 = [array1, array2]; //es un array que contiene dos arrays, muy diferente

//Obtener un array a partir de otro, se hará con .slice(x, y)
//x-> indice de inicio, y-> indice final
//si dejamos el y vacío, lo hará hasta el final
//El método SLICE no modifica el valor del array original

let array6 = array4.slice(0,3); // array con los 4 primeros elementos del array 4
