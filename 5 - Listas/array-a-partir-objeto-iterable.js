//NO SE UTILIZAN MUCHO
//un string es un objeto iterable
const str = "Hola soy Julian";

const ar_str = Array.from(str); //genera una lista con cada elemento
console.log(ar_str);

const set = new Set([2, 3, "hola", 4]);

const arr_set = Array.from(set);

//Método .keys()

const array = [1,2,3,4,5,6,7,8,9]
const keys = array.keys(); //objeto iterator

const ar_keys = Array.from(keys); //crea un array con los índices del array
console.log(ar_keys); 