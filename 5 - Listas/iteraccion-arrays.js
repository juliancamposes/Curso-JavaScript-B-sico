//Para recorrer los elementos de un array podemos hacerlo
//con los bucles
//en concreto el foreach

let array = [0, 1, 2, 3, 4];

//for (let i = 0; i < array.length; i++)

for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}

// Forma ES6 (más eficiente)
// en cada iteracción le daremos el valor a la variable valorIndividual
array.forEach(valorIndividual => {
    console.log(valorIndividual);
})

//Búsqueda de un valor dentro de un array
//lo haremos con el método find
//si imprimimos la variable que almacena el resultado,
//se imprimirá todo el valor que hay en el array
let arrayTrue = array.find(valor => {
    if(valor == 3){
        return true;
    }
});

console.log(arrayTrue);

//Ejemplo más útil con .find
const listaObjetos = [
    { nombre : "Julian", edad : 30},
    { nombre : "Paco" , edad : 20}
];

const isObject = listaObjetos.find(valor => {
    return valor.nombre === "Julian"
});

console.log(isObject); // imprime el objeto entero

//Si quiero obtener solo la edad del objeto
//creamos una variable que le indicamos que es atributo de objeto
// se la asignamos con el .find
const {edad} = listaObjetos.find(o => o.nombre === "Julian")
console.log(edad);