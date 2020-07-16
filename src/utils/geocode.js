const request = require("request")




const geoCode = (address,callback)=>{
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+".json?access_token=pk.eyJ1Ijoic3JhanZhbnNoaSIsImEiOiJja2NlbHBwMm0wODcyMnJvOG55a2F5ZjVhIn0.RinxjUHi9Xg9dDiYvJAi8g"
    
    request({url,json:true},(error, {body})=>{
     if(error){
         callback("unable to connect to location",undefined)
      
     
        }else if(body.features.length === 0){
    
            callback("unable to find location . try another search",undefined)
        }else{
            callback(undefined,{
                 latitude : body.features[0].center[1],
                 longitute : body.features[0].center[0],
                 location:   body.features[0].place_name
            })
        }
    })
    
    }


    module.exports = geoCode
    
    
  