//se van a declarar con function*

function* generarId(){
    let id = 0;
    while(true){
        id++
        if (id === 10){
            return id //hacemos un return normal para acabar la función
        }
        yield id;  //va a devolver como un return el número para guardarlo con yield y parará la función aquí
    }
}
//Esta funcion cada vez que es llamada va a generar un id incremental nuevo


const gen = generarId();

console.log(gen.next().value) //devolverá el siguiente valor en este caso 1
console.log(gen.next().value) //2...
//cuando llegue a 10 se llamará al return del if y acabará la función generadora