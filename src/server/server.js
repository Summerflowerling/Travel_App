let projectData = {}
const geonamesBaseUrl = "http://api.geonames.org/searchJSON?"
var path = require('path')
const dotenv = require('dotenv');
dotenv.config();
const geonameApiKey = process.env.GEONAME_API ;
const express = require('express')
const app = express() 
const fetch = require ('node-fetch')
app.use(express.static('dist'))

const port = 8080
app.listen(port, function(){
    console.log(`Testing on port ${port}`)
    console.log(`geo name api key ${geonameApiKey}`)
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
    const API_URL = `http://api.geonames.org/searchJSON?q=${req.body.location}&maxRows=1&username=${geonameApiKey}` // not working
    console.log(API_URL)

   // const API_URL = `http://api.geonames.org/searchJSON?q=${req.body.location}&maxRows=1&username=iku124` // works

    const myPromise = await fetch(API_URL); 
    
    try{
        const myData = await myPromise.json();  
        res.send(myData)
        
    }
       
    catch(error){
        alert("Make sure you enter a country or city name")
        return;
    }

})

