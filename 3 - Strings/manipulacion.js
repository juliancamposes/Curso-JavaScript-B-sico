//Pasar toda la cadena del texto en mayus - toUpperCase() - o minus - toLowerCase() - 

let str = "Este es un string";

let strMayus = str.toUpperCase();
let strMinus = str.toLowerCase();

console.log(strMayus);
console.log(strMinus);

//Concatenar dos string -> str1.contact(str2) y string1 + string2

let str1 = "Hola soy";
let str2 = " Julian";

let concatenado = str1.concat(str2); //admite varios string
let concatenado2 = str1.concat(" ", "Pedro");

let contactenad3 = str1 + str2;

//Eliminar espacios al principio y final del string

let str3 = " Hola soy un string con espacios ";

let strSinEspacios = str3.trim();
console.log(strSinEspacios);

//sin espacios al principio trimSTart
let strSinEspacioAlPrincipio = str3.trimStart();

//sin espacios al final con trimEnd
let strSinEspaciosAlFinal = str3.trimEnd();

//Obtener el caracter que hay en una posición determinada
//string.chartAt(posicion)
//tratar cadenas como array

let caracterEnPosicion = str3.charAt(3);
let caracterEnposicion2 = str3[3];

console.log(caracterEnPosicion);
console.log(caracterEnposicion2);

//obtener una posición (donde empìeza) de una palabra dentro de un string
//si no lo encuentra devuelve -1
//si se repite varias veces en el string devuelve la primera que encuentre

let str4 = "Hola soy Julian y me gusta el ajedrez";

let julian = str4.indexOf("Julian");
console.log(julian);

//si queremos encontrar la posición de la última instancia utilizaremos lastIndexOf()
let str5 = "Hola soy Julian y mi padre se llama también Julian";
let padre = str5.lastIndexOf("Julian");
console.log(padre);

