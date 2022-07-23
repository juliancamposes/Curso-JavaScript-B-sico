//Notación en JS
//Tenemos en JS el punto y coma (;), el punto(.), corchetes([])
//paréntesis () y llaves({})

// ; -> Delimitar el final de una línea, es opcional
const b = 4;

// . -> se utiliza en los objetos para acceder a los atributos
var movil = {
    "Marca" : "Iphone",
    "Modelo" : "SE"
};

console.log(movil.Modelo);

//[] -> se utilizan para las listas y arrays
const array =[
    1,
    2,
    3
];
console.log(array[0]);

//() se utilizan para las funciones
function suma(a,b){
    return a+b;
};

//{} -> para objetos, declarar funciones y estructuras de controlç
var movil = {
    "Marca" : "Iphone",
    "Modelo" : "SE"
};

if(movil.Modelo == "SE"){
    console.log("El movil es un SE")
}