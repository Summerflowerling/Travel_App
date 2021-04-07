/*Api URL*/
const geonamesBaseUrl = "http://api.geonames.org/searchJSON?"
const weatherBitUrl = "https://api.weatherbit.io/v2.0/forecast/daily?"
const pixabayUrl="https://pixabay.com/api/?key=4772361-58a041a9c4a31b16cbe90fbc1&q=yellow+flowers&image_type=photo"
var path = require('path')
/*.env and api keys*/
const dotenv = require('dotenv');
dotenv.config();
const geonameApiKey = process.env.GEONAME_API ;
const weatherbitKey = process.env.weatherbit; 
const pixabayKey = process.env.pixabay

const express = require('express')
const app = express() 
const fetch = require ('node-fetch')
app.use(express.static('dist'))

const port = 8080
app.listen(port, function(){
    console.log(`Testing on port ${port}`)
    //test if .env works fine
    console.log(`geo name api key`+ geonameApiKey)
    console.log(`weatherbit api key ${weatherbitKey}`)
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
   
    const API_URL = `http://api.geonames.org/searchJSON?q=${req.body.location}&maxRows=1&username=${geonameApiKey}` 

    const myPromise = await fetch(API_URL); 
    
    try{
        const myData = await myPromise.json();  
        let lng = myData.geonames[0].lng
        let lat = myData.geonames[0].lat
        
        const weatherbit = await fetch (weatherBitUrl+`lat=${lat}&lon=${lng}&days=7&key=${weatherbitKey}`)
       
        try{
            const weatherbitPromise = await weatherbit.json()
            console.log(weatherbitPromise)
            const pixabay = await fetch(`https://pixabay.com/api/?key=${pixabayKey}&q=${req.body.location}&image_type=photo&editors_choice=true&category=travel`)

            try{
                const pixabayPrimose = await pixabay.json()
                console.log(pixabayPrimose.hits[0])
                res.send([weatherbitPromise,pixabayPrimose.hits[0].largeImageURL])

            } catch(error){
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



