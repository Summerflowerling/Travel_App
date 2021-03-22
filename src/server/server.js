let projectData = {}
var path = require('path')
const express = require('express')
const app = express() 
app.use(express.static('dist'))

app.listen(8080, function(){
    console.log("Testing on port 8080")
})

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors")
app.use(cors())

app.get('/', function (req, res) {
    //res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/view/index.html'))
})