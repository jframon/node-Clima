const { getlugarLatLng } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para optener el clima',
        demand: true
    }
}).argv;

//Direccion Maps Services.
//https://developers.google.com/maps/documentation/geocoding/start
// Keys Maps
// AIzaSyAQEtIiVbBKoAbE-i8t4T4Jt3V1v-VBVD4

let getInfo = async(direccion) => {
    try {
        let coors = await getlugarLatLng(direccion);
        let temp = await getClima(coors.lat, coors.lng);

        return `La temperatura en ${coors.direccion} es de ${temp}`;
    } catch (e) {
        return `No se pudo determinar el clima en la ciudad ${direccion}`;
    }

}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));

// getlugarLatLng(argv.direccion)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(e => console.log('Error: ', e));

// getClima(19.2152609, -70.5205436)
//     .then(resp => console.log(resp))
//     .catch(e => console.log(e))