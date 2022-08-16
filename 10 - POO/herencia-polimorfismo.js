class Persona {
    //atributos y métodos
    #nombre;
    #edad;

    constructor(nombre){
        this.#nombre = nombre;
        this.#edad = "30";
    }

    getNombre(){
        return this.#nombre;
    }
}

class Dev extends Persona{
    //hereda los atributos y métodos de persona
}

const desarrollador = new Dev("Julian"); //usa el constructor de Persona
console.log(desarrollador.getNombre()); //usamos un método y atributo que está en la clase persona pero a través de la clase desarrollador por la herencia

/// Usando super

class Animal {
    nombre;
    raza;
    edad;

    constructor(nombre, raza, edad){
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
    }
}

class Perro extends Animal {
    patas;
    //creamos su constructor propio y llamamos al padre
    constructor(nombre, raza, edad, patas){
        super(nombre,raza,edad); //constructor del padre
        this.patas = patas;
    }
}

const txaku  = new Perro ("txaku", "podenco", 5, 4); 

//Polimorfismo: podremos crear un método con el mismo nombre que el del padre que lo va a sobreescribir
//si llamamos al método heredado y sobreescrito desde la clase hija, será diferente al método de la clase padre