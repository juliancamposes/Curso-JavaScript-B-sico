//Las funciones son bloque de código que se crear con un fin específico


saludar();
saludarNombre("Julian");

let nombre = "Paco";
saludarNombre(nombre); //paso por valor

function saludar(param1, param2){
    console.log("Hola");
}

function saludarNombre(nombre){
    console.log(`Hola ${nombre}`);
}

///Valores y variables
//Paso por valor
let nombre_2 = "Juan";
despedir(nombre_2); //al pasar por valor si luego modifico el valor del param no se modificad la variable original

function despedir(nombre){
    nombre = "Diego";
    console.log(`Adios ${nombre}`);
}

//Paso por referencia (objeto)
let persona = {
    nombre : "Juan",
    apellido : "Gonzalez"
}

function saludarPersona(persona){
    console.log(`Hola ${persona.nombre} ${persona.apellido}`);
}

saludarPersona(persona);

function despedirPersona(persona){
    persona.apellido = "Campos"; //CAMBIA EL OBJETO ORIGINAL
    console.log(`Adios ${persona.nombre} ${persona.apellido}`);
}

despedirPersona(persona);
console.log(persona.apellido);

/// Parametros opcionales
//si no le paso nada, el valor es 7, si le paso un parámetro, será el pasado

function imprimeNumero(numero = 7){
    console.log(numero);
}

///Definir funciones con parámetros indeterminados con el factor de propagación

function imprimir(...parametros){
    console.log(parametros); //imprime todos los parámetros que le pasemos
}

function suma(...numeros){
    console.log(typeof numeros); //lo toma como un array
    console.log(numeros[2]);
    console.log(numeros.reduce((a,b) => a+b));
}

//return para devolver el valor y guardarlo en una variable


//ámbito de una funcion

function multiplicar(a = 0, b = 0){
    //todo lo que definamos dentro será de ámbito local de la funcion y no será accesible fuera
    let resultado = a*b;
    console.log(resultado);
}

multiplicar(9,3);
console.log(resultado); //no es accesible desde aquí
