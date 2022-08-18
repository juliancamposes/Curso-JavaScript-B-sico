const f = document.getElementById("formulario")
//Vamos a lanzar otro evento diferente en lugar del onsubmit

f.addEventListener("submit", evento => {
    console.log(evento) //muestra la información del evento
    evento.preventDefault() //evita que se ejecute el evento por defecto
})


//Como crear nuestros propios eventos (custom events)
//Ir a eventos personalizados