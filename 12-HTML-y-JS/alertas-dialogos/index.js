const btn = document.querySelector("#btn")


//Crear evento para el click
btn.addEventListener("click", () => {
    console.log(btn)
    alert("Se ha hecho click") //alerta por pantalla
    confirm("Aceptas el mensaje?") && console.log("ok") //si es true se ejecutará el console log
    confirm("Aceptas el segundo mensaje?") ? console.log("aceptado") : console.log("no aceptado") //con ternarios

    // otra forma (con if)
    const respuesta = confirm("¿Seguro?")
    if(respuesta === true){
        console.log("Estás de acuerdo")
    } else {
        console.log("No lo estás")
    }
})

//pedir información con prompt
const btnInfo = document.querySelector("#mas-info")

btnInfo.addEventListener("click", () => {
    const nombre = prompt("¿Cuál es tu nombre?")

    console.log("Tu nombre es " + nombre)
})

//Mostrar lista de objetos con console.table

const lista = [
    {
        nombre : "Julian",
        edad : 31
    },
    {
        nombre : "Paco",
        edad : 32
    }
]

console.table(lista)