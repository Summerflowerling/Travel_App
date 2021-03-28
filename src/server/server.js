let projectData = {}
const geonamesBaseUrl = "http://api.geonames.org/searchJSON?"
var path = require('path')
const dotenv = require('dotenv');
dotenv.config();
const geonameApiKey = process.env.GEONAME_API ;
const express = require('express')
const app = express() 
app.use(express.static('dist'))

app.listen(8080, function(){
    console.log("Testing on port 8080")
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



//q=undefined&maxRows=1&username=undefined
app.post("/getGeoname", async function(req,res){
    const myPromise = await fetch(geonamesBaseUrl+`q=${req.body.location}&maxRows=1&username=${geonameApiKey}`); 
    
    try{
        const myData = await myPromise.json();  
        res.send(myData)
       
    }
       
    catch(error){
        alert("Make sure you enter a country or city name")
        return;
    }

})

