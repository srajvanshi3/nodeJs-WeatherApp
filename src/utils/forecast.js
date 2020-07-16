const request = require("request")

const forecast = (latitude ,longitude,callback)=>{
    const url = "http://api.weatherstack.com/current?access_key=11ae6a0ac413b62c52ca065a1979594b&query="+longitude+","+latitude+"3"
     
    request({url,json:true},(error ,{body})=>{
          if(error){
               callback('unable to connect weather service',undefined)
          }else if(body.error){
              callback('unable to find location',undefined)

          }else{
              callback(undefined,body.current.weather_descriptions[0]+" . it is currently " +body.current.temperature+" degrees out.There is a "+body.current.precip  +"% chance of rain")

          }
    })
    



}

module.exports = forecast