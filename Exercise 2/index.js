/*Ejercicio para el curso básico de JavaScript de Openbootcamp
----------
Enunciado:
Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:

- Tu nombre (string)

- Tu edad (number)

- ¿Eres desarrollador? (boolean)

- Tu fecha de nacimiento (Date)

- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)*/

const name = "Julian";
const age = 30;
const developer = true;
const birthDate = new Date(1991, 8, 3);
const favoriteBook = {
    Titulo : "El Club de las 5 de la mañana",
    Author : "Robin Sharma",
    Fecha : new Date(2018, 11, 5),
    Url : "https://www.amazon.com/-/es/Robin-Sharma/dp/1949061671"
};
