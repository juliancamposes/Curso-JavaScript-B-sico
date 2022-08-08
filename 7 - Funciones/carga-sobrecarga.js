function saludar(){
    hola();
}

function hola(){
    console.log("Hola");
}

saludar()

//La carga de funciones: hasta que no encuentra la llamada a la función  no la mete en la carga de caché
// 1. Lo primero que hacer el intérprete es cargar la función global()
// 2. saludar() global()
// 3. hola() saludar() global()
// Cuando termina saludar la quita de la carga
// 4. saludar() global()
// 5. global()


///Stackoverflow - Sobrecarga de funciones
///Ocurre en funciones recursivas

function resursiva(){
    recursiva(); //no va a tener fin -> sobrecarga
}