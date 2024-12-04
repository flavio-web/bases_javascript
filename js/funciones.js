
function sumar( numero1 = 0, numero2 = 0  ){

    const resultado = Number(numero1) + Number(numero2);
    return resultado;
}

const n1 = 'x';
const n2 = 20;
const total = sumar( n1, n2 );
console.log(`Total suma: ${total}`);