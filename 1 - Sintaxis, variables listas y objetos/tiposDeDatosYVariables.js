//Tipos primitivos

//Number
var number = 4;
//String
var string = "Hola Mundo";
//Boolean
var varTrue = true;
var varFalse = false;
//Null
var varNull = null;
//Undefined
var varUndefined = undefined;

// Diferencia entre var y let
var variableVar = 0;

if(variableVar == 0){
    let variableLetInside = "variable let modificada dentro del bloque";
    var variableVarInside = "variable var modificada dentro del bloque";
}

console.log(variableVarInside);
// console.log(variableLetInside); -> error, no se muestra
