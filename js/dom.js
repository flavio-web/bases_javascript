// ID ->getElementById
// CLASS ->getElementsByClassName
// ETIQUETA ->tagName
// QUERY -> querySelector

const nodoTitulo = document.getElementsByTagName('h3');
console.log( nodoTitulo );
nodoTitulo[0].textContent = 'Registrar Usuario';



const getDatosForm = () => {
    const nodoEmail = document.getElementById('email');
    const email = nodoEmail.value;

    const password = document.getElementById('password').value;

    const { value } = document.getElementById('password2')

    return {
        email,
        password,
        password2: value
    }
}

const setDatosForm = () => {
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('password2').value = '';
}

const validarDatos = ({ email, password, password2 }) => {

    const respuesta = {
        status: true,
        message: ''
    }

    try {

        if( !email ){
            throw new Error('El email es obligatorio');
        }

        if( !password ){
            throw new Error('La contraseña es obligatoria');
        }

        if( !password2 ){
            throw new Error('La contraseña de confirmación es obligatoria');
        }

        if( password !== password2 ){
            throw new Error('Las contraseñas deben ser iguales');
        }
        
    } catch (error) {
        respuesta.status = false;
        respuesta.message = error.message
    }

    return respuesta;

}


const btnRegistrar = document.querySelector('#formulario button');
btnRegistrar.addEventListener('click', () => {
    const usuario = getDatosForm();

    const { status, message } = validarDatos( usuario );
    if( status === false ){
        alert( message );
        return;
    }

    alert(`Usuario ${usuario.email} registrado correctamente`);
    setDatosForm();

    console.log( usuario );
});

const btnResetear = document.querySelectorAll('#formulario button');
btnResetear[1].addEventListener('click', () => {
    setDatosForm();
});

const nodoPasswords = document.getElementsByClassName('pass');
console.log( nodoPasswords );



const nodoEmail = document.getElementById('email');
nodoEmail.addEventListener('change', () => {
    alert('se cambio el valor del email')
});


const nodoPassword = document.getElementById('password');
nodoPassword.addEventListener('keypress', ( event ) => {
    console.log( event );
    alert('se presionó la tecla '+event.key);
});

const saludar = () => {
    const { email } = getDatosForm();
    alert(`Hola ${email}!`);
}

/** generar codigo html **/

const remplarzarHtml = () => {
    const html = `
        <p>
            Debes de completar los datos del formulario para poder registrar el nuevo usuario
        </p>
        <hr>
    `;

    const nodoDescripcion = document.getElementById('descripcion');
    nodoDescripcion.innerHTML = html;
}

remplarzarHtml();

/** eliminar un nodo **/
const nodoSpan = document.querySelector('#titulo span');
setTimeout( () => {
    nodoSpan.remove();
}, 3000);