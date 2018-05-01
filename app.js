const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
let comand = argv._[0];
switch (comand) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado: ',colors.green(archivo)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no reconosido');
}


