/*Ejercicio para el curso básico de JavaScript de Openbootcamp
----------
Enunciado:
Crea un archivo JS que contenga las siguientes líneas

- Una cadena de texto con tu Nombre

- Otra cadena de texto con tu Apellido

- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias

- Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas

- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas

- Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios

- Una variable que contenga la primera letra del Nombre

- Otra variable que contenga la última letra del Apellido

- Una cadena de texto que elimine los espacios de la variable "estudiante"

- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"*/

let nombre = "Julián";
let apellidos = "Campos Pérez";

let estudiante = nombre.concat(' ' , apellidos);
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();

let estudianteLength = estudiante.length;
let firstChar = estudiante.firstChar;
let lastChar = estudiante.lastChar;

let estudianteWithoutSpaces = estudiante.replace(/\s/g,"");
let estudianteContains = estudiante.includes(nombre);

