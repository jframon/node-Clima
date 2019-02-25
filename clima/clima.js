const axios = require('axios');

const getClima = async(lat, lng) => {
    let result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=e5a09f2339dc6c75147bed155a064c9f`);

    // if (result.data.status === 'ZERO_RESULTS') {
    //     throw new Error(`No hay resultados para la ciudad ${direccion}`);
    // }

    return result.data.main.temp;
}

module.exports = {
    getClima
}