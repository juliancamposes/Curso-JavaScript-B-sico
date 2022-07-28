//Las fechas son un objeto
//estan formatedas en milisegundos
//a partir del 01 de enero de 1970

//Inicialización de fechas
//1. Fecha actual
const fecha = new Date();
//2. Fecha en base a una fecha deseada (año y mes son obligatorios, resto opcionales)
const miFecha = new Date(1991, 08, 03);
console.log(miFecha);
//3. Fecha a través de los ms, también se puede definir ms negativos
const fechaMilis = new Date(300);
//4. A través de strings ("Mes ingles dia, año hora")
const fecheString = new Date("October 13, 1979 12:15:15");

///Comparación fechas
//Podemos comparar si una fecha es posterior a otra
//comparará la cantidad de ms


console.log(fecha > miFecha);
console.log(fecha < fechaMilis);

//Obtener ms a partir de una fecha
console.log(fecha.getTime());

//Obtener día, mes y año
fecha.getDay();
fecha.getMonth();
fecha.getFullYear();

//toLocaleString
console.log(fecha.toLocaleDateString());