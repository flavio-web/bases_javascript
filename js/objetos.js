const persona = {
    nombre: 'Juan',
    apellido: 'Morocho',
    edad: 35,
    isTrabajador: true,
    isEstudiante: false,
    email: null,
    telefono: undefined,
    getFullName(){
        return {
            fullname: `${ this.nombre } ${ this.apellido }`
        }
    },
    mayorEdad( edad = 0 ){
        if( edad >= 18 ){
            return 'Es mayor de edad';
        }

        return 'Es menor de edad'; 

    }
};

console.log( persona );
console.log( persona.getFullName() );
console.log( persona.mayorEdad( 25 ) );


const usuario =  {
    name: 'Luis',
    login( nickname = '', password = '' ){
        if( nickname == '@juan' && password == '123' ){
            return {
                status: true,
                message: 'Credenciales correctas'
            }
        }

        return {
            status: false,
            message: 'Usuario o contraseña incorrectos'
        }
    }
};

console.log( usuario.login( '@juan', '123' ) );

usuario.apellido = 'Ramires';
console.log({ ...usuario });

console.log( usuario.apellido );


function otroLogin( mensaje = ''){
    console.log('otroLogin '+mensaje);
    console.log('nombre '+this.name)
}

usuario.acceso = otroLogin;

console.log( usuario );
usuario.acceso('Hola Mundo!')