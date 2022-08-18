///Local storage
//funciones que tiene: clear, getItem, setItem, key

//setItem("clave", "valor")
localStorage.setItem("nombre", "Julian")
//modificar
localStorage.setItem("nombre", "Julian Campos")

//getItem
const nombre = localStorage.getItem("nombre")
console.log(nombre)

//Guardar un objeto con JSON.stringify
localStorage.setItem("objeto", JSON.stringify({nombre : "julian", edad: 31}))
//obtener como objeto
const objeto = JSON.parse(localStorage.getItem("objeto"))
console.log(objeto)

//Eliminar con removeItem
localStorage.removeItem("objeto")


///Sessionstorage es el mismo funcionamiento pero con sessionStorage

///Cookies tiene una forma de trabajar diferente document.cookie
//crear nueva cokie document.cookie = "nombre=valor"
document.cookie = "nombrecookie=juliancookie"

//modificar el expire
document.cookie = "nombreCaducidad=nombre;expires=" + new Date(2023,0,1)