let finDeTransmisionDeDatos = function (id) {
    console.log('Transferencia',id,'terminada');
}

let obtenDatosDeInternet = function (id, duracion) {
    return new Promise((resolve, reject) => {
        console.log('Proceso',id,'obteniendo datos de Internet');
        setTimeout(function () {
            finDeTransmisionDeDatos(id);
            resolve();
        }, duracion);
    });
}

module.exports.getDatos = obtenDatosDeInternet;