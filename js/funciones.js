/* function sumar( numero1 = 0, numero2 = 0  ){
    const resultado = Number(numero1) + Number(numero2);
    return resultado;
}
 */
const sumar = ( numero1 = 0, numero2 = 0 ) => Number(numero1) + Number(numero2);

const n1 = 30;
const n2 = 20;
const total = sumar( n1, n2 );
console.log(`Total suma: ${total}`);

/***  callbacks   ***/

const obtenerUsuario = ( nombre = '', callback ) => {

    const usuario = {
        id: '12345ABC',
        nombre: nombre
    };

    console.log( 'Ejecutando funccion obtener usuario .........' );
    setTimeout( function(){
        callback( usuario );
    }, 3500);
}

obtenerUsuario( 'Maria', ( user ) => {
    console.log( user );
    console.log( user.nombre.toUpperCase() );
});