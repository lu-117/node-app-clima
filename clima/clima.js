const axios = require('axios');


const getClima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a63bd10b08c07ea6a115e2924b58b48a&units=metric`);
    //console.log(resp);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}