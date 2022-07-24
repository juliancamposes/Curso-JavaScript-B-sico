//Los labels /etiquetas/ nos permitirán controlar mejor los bucles
//es una funcionalidad poco conocida y nos permite nombres los bucles

let decenas = 0;
let unidades = 0;

//etiqueta : bucle
bucleDecenas : while(true){
    bucleUnidades : while(true){
        console.log('El número actuales : ${decenas}${unidades}');
        unidades++;
        if (unidades === 10){
            unidades = 0;
            break bucleUnidades; //utilización de la etiqueta para romper unidades, podríamos poner el otro
            // si quisieramos salir del otro pondríamos break bucleDecenas;
        }

        if(decenas === 2){
            break bucleDecenas;
        }
    }
    decenas++;
}