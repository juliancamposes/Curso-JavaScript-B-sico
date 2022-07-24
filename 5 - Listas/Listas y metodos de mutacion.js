//Vamos a ver los métodos más usados para las listas (arrays)
//Los arrays pueden tener todo tipo de valores primitivos (con objetos incluidos)

let array = [1, 2, 3, 4, 5, 6];

//Podemos acceder a los valores a través de la posición, que empieza en 0

console.log(array[0]);

//Métodos para introducir nuevos valores en nuestros arrays : .push(), .unshift()

//Push sirve para poner valores al final
//Podemos pasarle tantos valores como queramos, separados por comas
array.push(7);

//Unshift() sirve para poner valores al principio
array.unshift(0);

//Métodos para eliminar valores en el array
//.pop() -> valores al final y .shift() -> valores al principio
array.pop(); //elimina el último elemento
array.shift(); //elimina el primer elemento

//Método para eliminar, modificar o añadir valores en array
//.splice(x, y, z)
// x-> indice donde se situa
// y-> cuantos valores se quiere eliminar (si queremos añadir lo ponemos 0, si queremos modificar 1 + z)
// z-> valores que queremos añadir (el "y" tiene que estar en 0) o modificar (el "y" debe estar en 1)

let array2 = [1, 2, 3, 4, 5, 6];

//Eliminar valores con splice(donde se situa, cuantos)
array2.splice(2, 3);

//Añadir valores con splice(indice, 0, valores a añadir)
array2.splice(2, 0, "Hola");

//Modificar valores con splice (indice, 1, valores que va a cambiar)
array3.splice(0, 1, 0);