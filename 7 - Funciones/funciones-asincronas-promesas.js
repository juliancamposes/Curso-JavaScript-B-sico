///Funciones asíncrontas
//Son funciones que pueden tardar algo de tiempo en ejecutarse (ej: llamada a BBDD)

function miAsinc(){
    //Hace una llamada a una BBDD externa
    //Puede tardar, o incluso dar un error
}

///Esto se define a través de las promesas
//que admite un callback(resolve,reject)

const miPromesa = new Promise((resolve, reject) =>{
    const i = Math.floor(Math.random()*2)
    if(i !== 0){
        resolve() //resolve si se ejecuta de forma exitosa
    } else {
        reject() //reject sino
    }
})

//Hay dos opciones de consumir las promesas

//1. Con el .then() y catch.(), estamos llamado a las funciones de miPromesa
miPromesa
  .then(()=> console.log("Se ejecuta de forma correcta")) //el console log es el resolve
  .catch(()=> console.log("Error")) // con el catch el reject
  .finally(() => console.log("Close")) //se ejecuta siempre