let projectData = {}
const geonamesBaseUrl = "http://api.geonames.org/searchJSON?"
const weatherBitUrl = "https://api.weatherbit.io/v2.0/forecast/daily?"
const pixabayUrl="https://pixabay.com/api/?key=4772361-58a041a9c4a31b16cbe90fbc1&q=yellow+flowers&image_type=photo"
var path = require('path')
const dotenv = require('dotenv');
dotenv.config();
const geonameApiKey = process.env.GEONAME_API ;
const weatherbitKey = process.env.weatherbit; 
const express = require('express')
const app = express() 
const fetch = require ('node-fetch')
app.use(express.static('dist'))

const port = 8080
app.listen(port, function(){
    console.log(`Testing on port ${port}`)
    console.log(`geo name api key`+ geonameApiKey)
    console.log(`weatherbit api key ${weatherbitKey}`)
    console.log("http://api.geonames.org/searchJSON?q=test&maxRows=1&username="+geonameApiKey)
})


const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors")
app.use(cors())

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/view/index.html'))
})




app.post("/getGeoname", async function(req,res){
    /*const API_URL = `http://api.geonames.org/searchJSON?q=${req.body.location}&maxRows=1&username=${process.env.GEONAME_API}` // not working
    /*const API_URL = `http://api.geonames.org/searchJSON?q=${req.body.location}&maxRows=1&username=${geonameApiKey}` // not working
    console.log(API_URL)*/

    const API_URL = `http://api.geonames.org/searchJSON?q=${req.body.location}&maxRows=1&username=iku124` // works

    const myPromise = await fetch(API_URL); 
    
    try{
        const myData = await myPromise.json();  
        let lng = myData.geonames[0].lng
        let lat = myData.geonames[0].lat
        console.log(myData)
        console.log(lng)
        console.log(lat)

        const weatherbit = await fetch (weatherBitUrl+`lat=${lat}&lon=${lng}&days=7&key=25236c54b21347c5acba0d34020a5c84`)
        console.log(weatherbitKey)

        console.log(`${weatherBitUrl}lat=${lat}&lon=${lng}&key=25236c54b21347c5acba0d34020a5c84`)//not working
        console.log(weatherBitUrl+`lat=${lat}&lon=${lng}&key=25236c54b21347c5acba0d34020a5c84`)//works

        try{
            const weatherbitPromise = await weatherbit.json()
            console.log(weatherbitPromise)
            const pixabay = await fetch(`https://pixabay.com/api/?key=4772361-58a041a9c4a31b16cbe90fbc1&q=${req.body.location}&image_type=photo&editors_choice=true&category=travel`)

            try{
                const pixabayPrimose = await pixabay.json()
                console.log(pixabayPrimose.hits[0])
                res.send([weatherbitPromise,pixabayPrimose.hits[0].largeImageURL])// send both result inside the array

            } catch(error){
                //add a default photo here
                res.send([weatherbitPromise, "img/backup.png"])
                console.log("Something wrong when fetching the photo",error)
            }

            
        } 
        catch(err){
            console.log("Error in the second fetch",err)
        }
       
    }
       
    catch(error){
        alert("Make sure you enter a country or city name")
        return;
    }

})



/*app.post("/getGeoname", async function(req,res){
    
    const API_URL = `http://api.geonames.org/searchJSON?q=${req.body.location}&maxRows=1&username=iku124` // works
    const myPromise = await fetch(API_URL)
    .then(function (response){
        if (response.ok){
            return  res.send(response.json());  
        } else {
            return Promise.reject(response)
        }
    })
    .then(
        fetch("https://api.weatherbit.io/v2.0/current?lat=48.85341&lon=2.3488&key=25236c54b21347c5acba0d34020a5c84")
        )
    .then(response=>{
        if(response.ok){
            console.log(response.json()) 
        }else{
            return Promise.reject(response)
        }
    })
    .catch(error=>{
        console.log(error)
    })
    
    
})
*/
/*const weatherBitPromise = await fetch("https://api.weatherbit.io/v2.0/current?lat=48.85341&lon=2.3488&key=25236c54b21347c5acba0d34020a5c84")
try {
    const weatherBitData = await weatherBitPromise.json()
    console.log(weatherBitData)

}catch (err){console.log(err)}
*/
