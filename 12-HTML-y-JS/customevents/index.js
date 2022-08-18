const hTexto = document.getElementById("h-texto")
console.log(hTexto)


hTexto.addEventListener("cambioTexto", evento => {
    console.log(evento.detail)

    //cambiamos el texto
    hTexto.innerText = evento.detail.texto
    hTexto.style.color = evento.detail.color
    
})


function cambiarTexto(nuevoTexto, color){
    //creación del evento cambioTexto (nombre del evento, objeto)
    const evento = new CustomEvent("cambioTexto", {
        detail: {
            texto: nuevoTexto,
            color: color
        }
    })

    //lanzamos el evento sobre el elemento que tenemos
    //cuando llamemos esta función en nuestro javascript o html, se lanzará
    hTexto.dispatchEvent(evento)
}