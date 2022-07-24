//En las estructuras de control utilizamos comparaciones para elegir el camino
//Estas son las que tenemos disponible en JS

//El de igualdad es == o ===
// == igualdad debil
// === estricta igualdad
// en la débil comparamos solo el valor
// en la estricta compara el valor y tipo

let a = 5;
let b = 5;

if(a == b){
    console.log("A es igual a B debil");
}

if (a === b){
    console.log("A es igual a B estricto");
}

let c = 5;
let d = "5";

if(c == d){
    console.log("C es igual a D debil");
}

if (c === d){
    //con c = 5 y d = "5" no entra a este if
    console.log("C es igual a D estricto");
}

//La comparación de desigualdad se realiza con dos tipos
//La básica se realiza con != y compara que sea diferente en valor
//Para comparar que son diferentes en valor y tipo usamos !==

let e = 4;
let f = 5;

if(e != f) {
    console.log("E no es igual a F");
}

let g = 4;
let h = "4";
if(e !== h) {
    console.log("G no es igual en valor ni tipo que H");
}

//Comparaciones de mayores o menos o mayores/menores e igual
//lo haremos con >, <, >=, <=
if(3 < 5){
    console.log("3 es menor que 5");
}

if(6 > 5){
    console.log("6 es mayor que 5");
}

if(5 <= 6){
    console.log("5 es menor o igual que 6");
}

if(6 >= 5){
    console.log("6 es mayor o igual que 5");
}

