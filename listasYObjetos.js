//Las listas son arrays -> conjunto de variables puestas en orden
//En JS el primer elemento tiene el 0 como index
const lista = [1,2,3,4,5];
const lista2 = new Array(1,2,3,4,5);

//para imprimir, lo llamamos por su posición
console.log(lista[0]);

//Objetos: son representaciones en datos de objetos de la vida real
const movil = {
    Marca : "Iphone",
    Modelo : "SE",
    Anio : 2020
}

//Pueden tener arrays u otros objetos dentros de él y usar comillas para los
//nombres de los atributos
const movilComplejo = {
    "Marca-Modelo" : ["Iphone", "SE"],
    Contactos : {
        "Paco" : 666113328,
        "Maria": 666666666
    }
}
//Para acceder
console.log(movilComplejo["Marca-Modelo"][0]); //Iphone
console.log(movilComplejo["Marca-Modelo"][1]); //SE
console.log(movilComplejo.Contactos.Maria); //666666666

//Aunque sean constantes
//Podemos añadir nuevas propiedades después de crearlo
movil.propietario = "Julian";
console.log(movil.propietario);

//O editarlos
movil.propietario = "Julian Campos";
console.log(movil.propietario);

// FECHAS
// Librerías de apoyo Moment.js

let date = new Date(); //Crea la fecha en el momento que se define la var
console.log(date); //YYYY-MM-DDTHH:MM:SS.MSSS

const fecha_milis = new Date(10); //basandonos en los ms desde el 01/01/1970
console.log(fecha_milis);

const fecha_cadena = new Date("march 25 2020"); //creacion fecha ingles
console.log(fecha_cadena);

const fecha_valores = new Date(2022, 2, 15); //creacion de la fecha, los meses empiezan por el 0 , enero ->0
console.log(fecha_valores);


//Obtener dia mes y año por separado de una fecha (variable date)
const dia = date.getDate();
const mes = date.getMonth() + 1;
const anio = date.getFullYear();

console.log(dia, mes, anio);