// Métodos más utilizados con Strings en JS

//Obtener la longitud de un string (length)
let str = "Hola soy un string";
console.log(str.length)

//Obtener partes de un string
//tenemos dos opciones: slice(), substring(), substr está obsolto

//slice: primer valor numero donde queremos donde empiece y como segundo donde acabe
let sliceStr = str.slice(0,4); //devuelve del 0 al 4

//substring funciona exactamente igual
let sliceSubstring = str.substring(0,4) 

//Reemplazar parte del contenido de una cadena de texto
//usaremos replace("lo que queremos sustituir", "por lo nuevo")
//Solo actua por la primera instancia
let nuevoStr = str.replace("string", "string reemplazado");
console.log(nuevoStr);

//reemplazar todas las instancias -> expresiones regulares
//lo haremos con la expresión regular /g (global)

let textoLargo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger los...";
let nuevoTextoLargo = textoLargo.replace(/los/g, "5");

console.log(nuevoTextoLargo);
