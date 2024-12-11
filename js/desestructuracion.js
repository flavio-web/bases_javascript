/**  DESESTRUCTURACION DE OBJETOS **/

const usuario = {
    id: 1,
    nombre: 'Maria',
    apellido: 'Ramirez',
    edad: 25,
    profesion: 'Desarrollo de software',
    telefono: '2154789451',
    email: 'maria@gmail.com'
}

/* console.log( usuario.nombre, usuario.telefono, usuario.email );

const { email, nombre, apellido, ...resto } = usuario;

console.log(`Hola ${nombre} ${apellido} con el email ${email}`);

console.log( resto ); */


const { profesion, ...resto } = usuario;
console.log( resto );


/** DESESTRUCTURACION DE ARREGLOS **/
const colores = ['azul', 'amarillo', 'rojo', 'verde'];

const [ casa, elemento, ...resto2  ] = colores;
console.log( casa, elemento, resto2 );

