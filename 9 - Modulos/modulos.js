// Un módulo es una parte de código que se peude reutilizar en diferentes partes de nuestro programa
// Estas funciones las vamos a implementar en implementandoModulo.js
// Para declarar que estas funciones son accesibles desde el exterior tenemos que EXPORTARLAS y luego IMPORTARLAS donde las quiera consumir
// 1. Tendremos que añadir "type" : "module" en nuestro package.json
// 2. Pondremos export en el inicio de la definición de la función
// 3. En el archivo externo haremos el import


export function sumar(a,b){
    return a + b;
}

export function multiplicar(a,b){
    return a * b;
}

export function elevar(a,b){
    return a**b;
}

export function factorizar(a){
    let factorial = 1;
    for(let i = 1; i <= a; i++){
        factorial *= i;
    }

    return factorial;
}

export const nombre = "Matematicas";


//Exportar las funciones
