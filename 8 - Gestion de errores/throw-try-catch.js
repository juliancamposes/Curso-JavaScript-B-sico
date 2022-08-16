/// Forma de gestionar los errores que va a dar el intérprete

const miFuncion = val => {
    return 2*val;
}

console.log(miFuncion(2));

console.log(miFuncion("2a")); //va a dar un error

//Gestionar errores con throw, que lanzará un error personalizado

const miFuncion2 = val => {
    if(typeof val !== "number") throw "Debe ser un numero";
    if(typeof val === "number"){
        return val * 2;
    } 


    

}

const doble = miFuncion2(4);
console.log(doble);

//Para gestionar la respuesta ante errores podemos usar try catch

try {
    const doble2 = miFuncion2("2");
} catch (e){
    console.error(e); //e es el error
} finally {
    console.log("Lo que hay en finally se ejecuta siempre");
}


//Errores más comunes ya pregenerados
// InternalError, SyntaxError, TypeError, RangeError y ReferenceError