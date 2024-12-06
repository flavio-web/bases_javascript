const edad = 30;

if( edad >= 21 ){
    console.log("Es mayor de edad a nivel mundial");
}else{
    if( edad >= 18 ){
        console.log("Es mayor de edad dentro del país")
    }else{
        console.log("es menor de edad");
    }
}

const color = 'amarillo';
switch( color ){
    case 'verde':
        console.log("El color es verde");
        break;
    case 'azul':
        console.log("El color es azul");
        break;
    case 'rojo':
        console.log("El color es rojo");
        break;
    default:
        console.log("El color "+color+" no existe")
        break;
}

const equipos = [ 'Barcelona', 'Emelec', 'Liga de Quito', 'Independiente', 'Orense' ];

for( let index = 0; index < equipos.length; index++ ){

    if( index === 1 ){
        continue;
    }

    if( index > 3 ){
        break;
    }

    console.log(`En la posición #${index} está el equipo ${equipos[index]}`);
}

const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];

for( index in dias ){
    console.log(`El dia de la semana es ${dias[index]}`)
}

dias.forEach( ( elemento, index ) => {

    console.log(`Dia: ${elemento} en la posicion ${index}`);

});


let diasSemana = 1;
while( diasSemana < 6 ){
    console.log(`El dia de la semana es: ${diasSemana}`);
    diasSemana++;
}

let semanas = 5;
do{
    console.log(`La semana es: ${ semanas }`);
    semanas++;
}while( semanas < 5 );