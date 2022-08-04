//Funciones de tipo flecha y anónimas

//Tipo flecha (ECMAScript 6)
//Solo se pueden acceder después de que han sido inicializada (no como var o function)

const array = [1,5,6,2,6,9];
const array2 = array.map(valor => valor*2);
const array3 = array.map(valor => {
    return valor*2;
})

console.log(array2);
console.log(array3);

const dobleValor = valor => valor*2;
const array4 = array.map(dobleValor);
console.log(array4);

//funciones anonimas: las que no asignamos ningún nombre
const array5 = array.map(valor => valor*2);