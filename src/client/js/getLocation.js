
const test = document.getElementById("test")
const geonamesBaseUrl = "http://api.geonames.org/searchJSON?"
let placeName=""
let url
let city 
let weatherInfo


/*post request to local server and get the data back */


export  function getLocation(locationInput, startDate, endDate) {
    
    fetch('http://localhost:8080/getGeoname',{
        method: 'POST',
        credentials: 'same-origin',
       mode: 'cors',
        headers:{
            'Content-Type':'application/json',
        }, 
        body:JSON.stringify({"location":`${locationInput}`, "startDate":`${startDate}`, "endDate":`${endDate}`}),
        
    })
    .then(res=> res.json())
    .then(json=>{
        console.log("response json",json)
        city = json[0].city_name
        url = json[1]
        weatherInfo = json[0].data
        console.log("City name",city)//test
        console.log("start Date",startDate)//test
        console.log("start Date",endDate)//test
        console.log("weatherInfo",weatherInfo)
        let dayInfo=Client.getDays(startDate, endDate) 
       
        //Client.updateUi(city, url, startDate, endDate, weatherInfo)
    })

       
  }


 

export  function handleSubmit(event){
    event.preventDefault()
    let destinationInput = document.getElementById("destination").value
    let travelStartDate = document.getElementById("travelStartDate").value
    let travelEndDate = document.getElementById("travelEndDate").value
    result.innerHTML=`<p>${destinationInput}</p>`
    console.log(destinationInput)//test
    getLocation(destinationInput, travelStartDate, travelEndDate)
  }
   



