const request = require('request')

const weatherInfo = (address, callback) => {
    const url = "https://api.weatherapi.com/v1/current.json?key=0e004dcc1a0b4e38ac9180109200906&q=" + address + "/current.json"

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback("Unable to connect weather service" , undefined)
        } else if (body.error) {
            callback(body.error.message , undefined)
        } else {
            callback( undefined ,"Today cloud rate is : "+ body.current.cloud+" %.Humidity is : "+body.current.humidity+"% . It is "+body.current.temp_c+" degree out")
        }
    })
}
module.exports = weatherInfo