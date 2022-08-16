//Vamos a importar las funciones y propiedades (constantes) de modulos.js
//Import ES6 - import

import { sumar, elevar, nombre } from './modulos.js';

// Entre las llaves pondremos las funciones que queremos importar
// Para importar todo el archivo lo haríamos:
// import * as modulo from './modulos.js';
// sus funciones serían ya con modulo.nombreFuncion();



const suma = sumar(3,4);
const potencia = elevar(3,2);
console.log(suma);
console.log(potencia);
console.log(nombre);