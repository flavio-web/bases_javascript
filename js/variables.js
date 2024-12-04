var nombre = 'Flavio';

let apellido = 'Román';
const cedula = '123456789';

console.log('Mi nombre es: '+ nombre+' y mi apellido es '+apellido );
console.log(`Mi apellido es: ${apellido} y mi nombre es ${nombre}`);
console.log( cedula );

apellido = 'Ruiz';
console.log( apellido );

let edad = 30;
console.log(`Mi edad es: ${edad}`);

edad = '30 años';
console.log( edad );

let isAdmin = true;
let genero = undefined; //null
console.log(`El genero es: ${genero}`)

let colores = ['azul', 'amarillo', 'rojo'];
console.log( colores );

let carro = {
    color: 'rojo',
    asientos: 5,
    tracccion: 'mecanica',
    propietario: {
        nombre: 'Juan',
        apellido: 'Lopez'
    },
    matriculas: ['2000', '2010', '2024'],
    funciona: true,
    velocidades: undefined,
    multas: [2002, 2005]
}

console.log( carro );