/*Crea un archivo JS que contenga las siguientes líneas

- Una variable que contenga la lista de la compra (mínimo 5 elementos)

- Modifica la lista de la compra y añádele "Aceite de Girasol"

- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación) */


let listaCompra = ["Melón", "Sandía", "Yougurt", "Pan", "Agua"];

listaCompra.push("Aceite de Girasol");
listaCompra.pop();

let peliculasFavoritas = [
    {
        "Titulo" : "Gladiator",
        "Director" : "Ridley Scott",
        "Fecha": 2000
    },{
        "Titulo" : "Gran Torino",
        "Director" : "Clint Eastwood",
        "Fecha": 2008
    },{
        "Titulo" : "Into the wild",
        "Director" : "Sean Penn",
        "Fecha": 2007
    }
];

let posterior2010 = peliculasFavoritas.filter(obj => obj.Fecha > 2010);
let directores = peliculasFavoritas.map(obj => obj.Director);
let titulos = peliculasFavoritas.map(obj => obj.Titulo);
let directoresYTitulos = directores.concat(titulos);
let directoresYTitulosPro = [...directores, ...titulos]
