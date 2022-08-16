//Los getters and setters van a ser métodos públicos que nos van a permitir modificar y consultar los atributos privados/protected de una clase

class Persona {
    #nombre; //private
    _edad; //protected


    setNombre(nombre){
        this.#nombre = nombre;
    }

    getNombre(){
        return this.#nombre;
    }

    setEdad(edad){
        this._edad = edad;
    }

    getEdad(){
        return this._edad;
    }
}