//Métodos avanzados para arrays
// .map()
// .filter()
// .reduce()
// map y filter son muy utilizados en frameworks
// reduce es un poco menos

const array = ['Cordoba', 'Sevilla', 'Malaga', 'Cadiz', 'Huelva', 'Almeria', 'Jaen', 'Granada'];
array.forEach(valor => { console.log(valor)});

//map()
//nos va a servir para crear un nuevo array a partir del anterior y lo podemos modificar
//map acepta dos parámetros, el valor y el índice
//array.map((valor, indice) => {})

const newArray = array.map((valor, indice) => {
    return `${indice + 1} - ${valor}` //return del valor modificado
})

console.log(newArray);

//filter()
//nos va a servir para obtener una serie de objetos que cumpla una serie de condiciones
//.filter(obj => {})
//le pasaremos una condicion que devolverá true para pasar el filtro
//false para no pasarlo

const arrayObj = [
    { nombre : "Julian", edad : 31},
    { nombre : "Paco" , edad : 20}
]

const personasMayores30 = arrayObj.filter(obj=>{
    if(obj.edad > 30){
        return true;
    } else {
        return false;
    }
})

//forma de hacerlo más simple
const personasMayores30Simple = arrayObj.filter(obj => obj.edad > 30);

console.log(personasMayores30);
console.log(personasMayores30Simple);

//reduce()
//sirve para obtener algo a partir de una lista
//ex: sumar todos los valores
//acepta 4 parámetros (valor anterior, current valor, indice y el array origina)
// valor anterior => va a ser un valor acumulativo (al principio toma el valor del primer elemento)
// cur => valor actual de la iteracción
// i => numero de iteraccion
// arrayOriginal => el array

const valores = [3, 56, 23, 5, 90, 100];
const suma = valores.reduce((acum, cur, i, arrayOriginal) => {
    console.log(acum);
    console.log(cur);
    console.log(i);
    console.log(arrayOriginal);
    return acum + cur; //para hacer la suma devuelvo el acumulado + el actual
})