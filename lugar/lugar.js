const axios = require("axios");

const getLugar = async(direccion) => {

    const encodeUri = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${encodeUri}`,
        headers: {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": "25e7ad6a0cmshaa0c8fd19a1ef53p1e2557jsn140fc64bbe2f",
            "useQueryString": true
        }
    });

    const resp = await instance.get();

    if (resp.data.length === 0) {
        throw new Error(`No hay resultados para ${ direccion }`);
    }
    const data = resp.data;
    const direction = data.name;
    const lat = data.coord.lat;
    const lon = data.coord.lon;

    //console.log(direction, lat, lon);
    return {
        direction,
        lat,
        lon
    }
}

module.exports = {
    getLugar
}