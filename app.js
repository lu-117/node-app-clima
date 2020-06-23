const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require("yargs").options({
    direccion: {
        alias: '-d',
        desc: 'Dirección de la ciudad para optener el clima',
        demand: true
    }
}).argv;

/* const dir = lugar.getLugar(argv.direccion);
console.log(dir); */

//console.log(dir);

//console.log(argv.direccion);
/* clima.getClima(35, 139)
    .then(console.log)
    .catch(console.log); */

const getInfo = async(dir) => {

    try {
        const coord = await lugar.getLugar(dir);
        const temp = await clima.getClima(coord.lat, coord.lon);
        return `El clima de ${ coord.direction} es de ${temp}.`;

    } catch (error) {
        return `No se pudo determinar el clima de  ${ coord.direction}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);