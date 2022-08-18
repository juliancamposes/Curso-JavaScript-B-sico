//con document.on... vemos todos los eventos que pueden ocurrir
//podemos asociar un evento a un elemento

//bind() : el método bind() se ejecuta en funciones (ej: eventos)
// eslint-disable-next-line no-unused-vars

pasaPorPantalla(){
    console.log(this); //this hace referencia al document por norma general
}

const objeto = {
    tipo: "parrafo",
    longitud : 32
}

const pasaObjetoPorPantalla = pasaPorTanlla.bind(objeto) //con esto this hará referencia al objeto

///Eventos por defecto
// Todos los eventos tienen un comportamiento por defecto
// Pero este se puede modificar para cumplir nuestras especificadciones