//factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

var factorial10 = 1;

for(var i = 1; i <= 20; i++){
    factorial10 *= i;
    if(i == 10){
        break;
    }
}

console.log('El factorial de 10 es : ' + factorial10);