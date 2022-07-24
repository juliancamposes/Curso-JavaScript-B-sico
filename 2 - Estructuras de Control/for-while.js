//Los bucles for y while nos van a permitir ejecutar un código mientras se cumpla una condición
//En el bucle for, en cada iteracción iremos aumentando (++) un index para que nos sea infinito
//o también podemos ir en decremento con --
for(var i = 0; i <= 10; i++){
    console.log(i);
}

for(var i = 10; i > 0; i--){
    console.log(i);
}

//Con el bucle while ejecutaremos un código mientras que una condición se cumpla.
//Podemos hacerlo de varias formas
//Primero valoramos la condición y luego ejecutamos
var i = 0;
while(i < 10){
    console.log(i);
    i++;
}

//Ejecutamos al menos una vez el código y luego valoramos la condición
//aunque sea false, primero se ejecutará el código al menos una vez

//ejemplo de condición true

var contador = 0;
do {
    console.log(contador);
    contador++;
} while(contador < 10);

//ejemplo de condición false que se ejecutará una vez
var contadordos = 11;
do {
    console.log(contadordos);
    contadordos++;
} while(contadordos < 10);

//LOS BUCLES SE PUEDEN CONTROLAR CON BREAK; Y CONTINUE;
//Con continue vamos a indicarle al bucle que interrumpa esa iteracción pero que siga con la siguiente
//Lo ideal es que no sean necesarias

for(var i = 0; i <= 10; i++){
    if(i == 5){
        continue; //no va a imprimir el 5, porque el código después de esto se lo salta, lo que está antes lo va a ejecutar
    }

    console.log(i);
}

//Con break vamos a hacer que el bucle se interrumpa del todo

for(var i = 0; i <= 10; i++){
    if(i == 9){
        break; //al llegar al 9 se interrumpe el bucle, no continua con las siguientes iteracciones
    }

    console.log(i);
}


//ÁMBITOS DE LOS BUCLES: alcance de las variables declaradas dentro del for será global si es var (podemos acceder dentro)
//o local si está declarada como un let (solo tendrán alcance dentro de ese bucle)

for(let j = 0; j < 5; j++){
    console.log("J está dentro del alcance del bucle");
}

// console.log(j); da error porque es let dentro del bucle for

for(var k = 0; k < 3; k++){
    console.log(k);
}

console.log(k); //se puede imprimir porque al ser var es global aunque esté declarada dentro del bucle