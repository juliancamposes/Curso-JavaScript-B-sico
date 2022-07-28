//Qué son los objetos en JavaScript y cuáles son sus propiedades

//Definición de un objeto
//La key puede estar entre comillas
//Si queremos ponerle algún número al principio
  const objeto = {
    id: 4,
    nombre: "Julian",
    apellido: "Campos",
    isDeveloper: true,
    libros_favoritos: ["Harry Potter", "Juego de tronos"],
    "3-numeros" : [1,2,3]
  }

  //Acceder a los atributos de un objeto
  //Si es una propiedad que empiece por número lo hacemos con corchete
  console.log(objeto.nombre);
  console.log(objeto["3-numeros"]);
  const prop = "nombre";
  console.log(objeto[prop]);

  //OJO: Replicar un objeto

  const obj2 = objeto; // si lo hacemos así, no replicamos sino que le asignamos su espacio de memoria
  obj2.nombre = "Paco"; //cambiamos el nombre al objeto
  console.log(objeto.nombre); 

  //La forma correcta es con el operador ..
  const obj3 = {...objeto};//crea un nuevo objeto y mete dentro de las propiedades del objeto 1 sin hacer ref a la memoria

/// Ordenar listas de objetos en función de un atributo
/// Es muy utilizado
//// Lo haremos con .sort igual que hemos visto en los arrays (repasar)