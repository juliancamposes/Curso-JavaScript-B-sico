//Para ordenar listas podemos usar .sort((a,b) => {})
//.sort modifica el array
//obligatorio un return :
// - Número negativo: a va a tener un índice menor que b
// - Número positivo : a va a tener un índice mayor que b
// - Cero : no hay cambios

const array = [1, 3, 6, 2, 9];

array.sort((a, b) => {
    if(a > b){
        return 1;
    } else if (a < b){
        return -1;
    } else {
        return 0;
    }
})

console.log(array);

//Hay forma más sencilla de ordenaro solo arrays numéricos
const array2 = [1, 3, 6, 2, 9];

array2.sort((a,b) => a - b); //si a es mayor que b la resta será positiva, y si es menor será negativa
console.log(array2);

//Comparar listas con .every()
//

const array3 = [1, 3, 6, 2, 9];

array.every(valor => {
    //Si todos los elementos lo cumple, devuelve true, sino false
    if (typeof valor === "number"){
        return true;
    } else {
        return false;
    }
}
    )