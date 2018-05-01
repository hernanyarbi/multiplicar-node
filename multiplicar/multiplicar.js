const fs = require('fs');
const colors = require('colors');

let data = '';

let listarTabla = (base, limite) => {
    console.log('-------------------------------'.green);
    console.log(`Tabla del ${base}`.green);
    console.log('-------------------------------'.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${i} * ${base} = ${i * base}`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            return reject(`${base}  no es un nuumero`);
        }

        for (let i = 1; i <= limite; i++) {
            data += `${i} * ${base} = ${i * base} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}