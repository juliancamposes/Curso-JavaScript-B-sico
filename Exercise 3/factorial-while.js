//Calcular el factorial de 10 utilizando un bucle while

var factorial10 = 1;
var contador = 1;

while(contador <= 10){
    factorial10 *= contador;
    contador++;
}

console.log('El factorial de 10 es : ' + factorial10);