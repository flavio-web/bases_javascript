const frutas = ['manazas', 'peras', 'uvas'];

//length
console.log(`Total de frutas: ${frutas.length}`);

//concat
const mascotas = ['perro', 'gato', 'loro'];

const frutas_mascotas = frutas.concat( mascotas );
console.log( frutas_mascotas );

//join( separador )
const frutas_string = frutas.join(' ');
console.log( frutas_string );

//pop() Elimina el ultimo elemento de un array
const mascotas_pop = mascotas.pop();
console.log( mascotas_pop );
console.log( mascotas );

//push() Add un nuevo elemento al final del array
const mascotas_push = mascotas.push('gallina');
console.log( mascotas_push );
console.log( mascotas );

//shift() Elimina el primer elemento de un array
const frutas_shift = frutas.shift();
console.log( frutas_shift );
console.log( frutas );


//unshift() Add un nuevo elemento al inicio del array
const frutas_unshift = frutas.unshift('bananas');
console.log( frutas_unshift );
console.log( frutas );

//reverse() 
const frutas_reverse = frutas.reverse();
console.log( frutas_reverse );


//splice() //Add o eliminar elementos en posiciones especificas
const frutas_splice = frutas.splice( 1, 1 );
console.log( frutas_splice );
console.log( frutas );

//indexOf Obtiene el indice de un elemento
const frutas_indexOf = frutas.indexOf( 'bananas' );
console.log( frutas_indexOf );



const usuarios = [
    {
        id: 1,
        nombre: 'Maria',
        email: 'maria@gmail.com',
        password: 'maria123'
    },
    {
        id: 2,
        nombre: 'Juan',
        email: 'maria@gmail.com',
        password: 'juan123'
    },
    {
        id: 3,
        nombre: 'Lucia',
        email: 'lucia@gmail.com',
        password: 'lucia123'
    }
];

//filter
const usuarios_filter = usuarios.filter( ( usuario ) => usuario.id != 2 && usuario.id != 3 );
console.log( usuarios_filter );
console.log( usuarios );


//findIndex Obteniene el indice de un elemento de un arraeglo de objetos
const usuarios_findindex = usuarios.findIndex( ( usuario ) => usuario.id === 3 );
console.log( usuarios_findindex );

//usuarios[usuarios_findindex].nombre = 'Carmen';

usuarios.splice( usuarios_findindex, 1 );
console.log( usuarios );

//find Encontrar un elemento especifico
const usuario_find = usuarios.find( ( usuario ) => usuario.email === 'maria@gmail.com' );
console.log( usuario_find );








