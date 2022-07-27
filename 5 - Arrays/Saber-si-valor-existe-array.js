//Para saber si solo algunos de la lista cumple la condición
//.some()
//funciona igual que el every(), se itera y si hay algún valor que
//cumpla la condición, pues devuelve true

const array = [1, 3, 5, 7, 9, 11];

const par = array.some(value => value%2 == 0);
console.log(par); //devuelve false

const arrayObj = [
    { nombre : "Julian", edad : 31},
    { nombre : "Paco" , edad : 20}
]

//lo podemos usar para ver si existe un objeto en una lista
const existeJulian = arrayObj.some(value => value.nombre == "Julian");
console.log(existeJulian);

