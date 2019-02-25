const axios = require('axios');

const getlugarLatLng = async(direccion) => {
    let encodedURI = encodeURI(direccion);

    let result = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURI}&key=AIzaSyAQEtIiVbBKoAbE-i8t4T4Jt3V1v-VBVD4`);

    if (result.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }

    let location = result.data.results[0];
    let coordenadas = location.geometry.location;


    return {
        direccion: location.formatted_address,
        lat: coordenadas.lat,
        lng: coordenadas.lng
    }
}


module.exports = {
    getlugarLatLng
}