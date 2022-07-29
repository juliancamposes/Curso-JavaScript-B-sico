/*Crea un archivo llamado objetos.js que contenga las siguientes líneas

- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

- Una variable que obtenga tu edad a partir del objeto anterior

- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor*/

const datosPersonales = {
    Nombre : 'Bit',
    Apellido : 'Nómada',
    Edad : 30,
    Altura : 180,
    eresDesarrollador : true
}

let edad = datosPersonales.Edad;

const mejorAmigo1 = {
    Nombre : 'Estrella',
    Apellido : 'Galicia',
    Edad : 112,  //1906
    Altura: 33,  //33cl of course
    esCerveza : true
}

const mejorAmigo2 = {
    Nombre : 'Alhambra',
    Apellido : 'Reserva',
    Edad : 97, //1925
    Altura : 33, //33cl of course
    esCerveza : true
}


let reunion = [
    datosPersonales,
    mejorAmigo1,
    mejorAmigo2
];

let listaOrdenada = reunion.sort((a,b) => {
    if(a.Edad > b.Edad){
        return 1
    } else if (a.Edad < b.Edad){
        return -1
    } else {
        return 0
    }
})


