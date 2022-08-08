/*
Crea un archivo JS que contenga las siguientes líneas

- Una función sin parámetros que devuelva siempre "true"

- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

- Una función generadora de índices pares automáticos
*/


///Funcion sin param que devuelve siempre true
function sinParamTrue(){
  return true
}

/// Función asíncrona con setTimeout
const myPromes = new Promise((resolve, reject) => {
    if(true){
        resolve()
    } else {
        reject()
    }
})

function ejecutarPromesa(){
    myPromes.then(()=> console.log("Hola soy una promesa"))
    myPromes.catch(()=> console.log("Error con la promesa"))
}

setTimeout(ejecutarPromesa, 5000)

///Función generadora

function* generarId(){
    let id = 0;
    while(true){
        id += 2;
        yield id;
    }
}

const id = generarId();

console.log(id.next().value);
console.log(id.next().value);





