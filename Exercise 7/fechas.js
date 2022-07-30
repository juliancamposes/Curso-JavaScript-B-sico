/*- La fecha de hoy

- La fecha de tu nacimiento

- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

- Una variable que contenga el día de tu nacimiento

- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

- Una variable que contenga el año de tu nacimiento (con 4 dígitos)*/


let hoy = new Date();
let birthdate = new Date(1991, 08, 03);
let dayOfBirth = birthdate.getDay();
let monthOfBirth = birthdate.getMonth();
let yearOfBirth = birthdate.getFullYear();
console.log(yearOfBirth);