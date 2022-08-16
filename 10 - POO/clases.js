//Creación de una clase para crear objetos
//Podemos hacer export class para tener las clases en archivos distintos y poder instanciarlos en otros archivos
class Persona {

    //Atributos
    nombre;
    edad;
    isDeveloper;

    //Método constructor
    constructor(nombre, edad, isDeveloper){

        //asignamos a los atributos los parámetros pasados por el constructor
        this.nombre = nombre;
        this.edad = edad;
        this.isDeveloper = isDeveloper;
    }

    //Métodos
    saludo(){
        console.log(`Hola mi nombre es ${this.nombre} tengo ${this.edad} años`);
    }
}


//Instancia de persona

const persona = new Persona("Julián", 30, true);
persona.saludo();

//Tenemos el operador Instanceof -> similar al typeof pero para clase
console.log(persona instanceof Persona);