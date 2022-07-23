//Podemos declarar String ESTÁTICOS de la siguiente forma

let strDobles = "Hola soy una cadena de texto con comillas dobles";
let strSimple = 'Hola soy una cadena de texto con comillas simples';

//Poner comillas dentro del string con la barra invertida

let cita = "El otro día me dijeron: \" Hola \" "; 
let citaSimple = 'El otro día me dijeron : "Hola"';
let citaDobles = "El otro día me dieron : 'Hola'";

//// Comillas invertidas (backticks) ``
// Estas comillas invertidas tienen una funcionalidad extra
// nos permite introducir variables dentro del texto
//permite los saltos de línea

let str_backticks = `Esto es un string con backticks`;
let nombre = "Julian";

let saludo = `Hola ${nombre}`;
console.log(saludo);

//las backticks son muy comunes utilizarlas como plantillas HTML en vue..
//suponen una ayuda para poner las variables en el código HTML

let nombrePagina = "Bit Nomada"

let plantilla = `
<html>
    <head>
        <title>${nombrePagina}</title>
    </head>
    <body>
        <h1>Esto es un parrafo</h1>
    </body>
</html>
`;