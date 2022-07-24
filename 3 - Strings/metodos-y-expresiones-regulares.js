//Métodos de cadenas de texto (parte 3)
// htps://regexr.com -> expresiones regulares

//Las expresiones sirve realizar búsqueda de forma más avanzada

//Buscar cuantas veces aparece una palabra en un texto
let textoLargo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger los...";
console.log(textoLargo.match(/no/g)); //match utiliza una expresión regular, obtiene también si está dentro de otra palabra

//Includes -> Ver si un texto contiene una palabra (return boolean)
console.log(textoLargo.includes("no"));

//Saber si un texto empieza/acaba con un string determinado
console.log(textoLargo.startsWith("Tito"));
console.log(textoLargo.endsWith("palabra"));