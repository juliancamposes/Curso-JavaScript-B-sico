//obtenemos todos los elementos que son arrastrables (parrafos)
const parrafos = document.querySelectorAll(".parrafo")

//le ponemos eventos a cada uno de los parrafos
//dragstart = evento para cuando iniciamos a arrastrar algo
//dragend = final del arrastre


parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event =>{
        console.log("Inicio de arrastre")
        console.log("Estoy arrastrando el parrafo " + parrafo.innerText) //innerText nos da el contenido del parrafo
        parrafo.classList.add("dragging") //le podemos añadir una clase
        //con dataTransfer del evento podemos transferir informacion
        event.dataTransfer.setData("id", parrafo.id)
    })

    parrafo.addEventListener("dragend", () => {
        console.log("Fin del arrastre del " + parrafo.innerText)
        parrafo.classList.remove("dragging") //le quitamos la clase
    })
})

//dragover = función en cada renderización
//drop = cuando soltamos algo dentro de la seccion

const secciones = document.querySelectorAll(".seccion")

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault() //tenemos que prevenir el comportamiento por defecto
        //
    })

    seccion.addEventListener("drop", event => {
        console.log("drop")
        //Propiedad de los eventos datatransfer: nos permite poder transferir información
        //vamos a acceder a la información ya almacenada al soltar
        //puede servir para poder pasar un párrafo de una sección a otra
        const idParrafo = event.dataTransfer.getData("id")
        //vamos a cambiar la posicion
        const parrafo = document.getElementById(idParrafo)
        seccion.appendChild(parrafo) //añadimos el parrafo a la seccion
    })
})

//Más opciones de DataTransfer => documentación oficial