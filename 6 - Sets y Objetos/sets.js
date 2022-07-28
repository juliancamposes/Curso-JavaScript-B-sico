//Los sets son conjuntos
//se comportan de forma diferente a los arrays
//un set es UN CONJUNTO NO ORDENADO DE VALORES ÚNICOS, no se van a repetir

const array = [1,2,3,4,5,1];

const miSet = new Set(array); //le tenemos que pasar un objeto iterable

console.log(array);
console.log(miSet);

//Dentro de los sets existen métodos para añadir y elemiminar valores
//.add()
//.delete()
//.clear() -> elimina todos los valores

miSet.add(6);
console.log(miSet);
miSet.delete(1);
console.log(miSet);
/* miSet.clear();
console.log(miSet); */

//comprobar si tiene un valor con .has()
miSet.has(2); //devuelve true o false
//conocer el tamaño del set con la PROPIEDAD size
miSet.size;

//Para iterar el set lo podemos hacer con el FOREACH
miSet.forEach(valor => {
    console.log(valor);
})

//Para obtener los valores del set lo podemos hacer de dos formas:
//1. Con un objeto iterator
//2. Convertir de nuevo el set en un array con el factor de propagacion

//Objeto iterator
const it_miSet = miSet.values();
console.log(it_miSet);

//Convirtiéndolo en array
const ar_miSet = [...miSet];
console.log(ar_miSet);