
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
        let duration =Client.getDays(startDate, endDate) 
        if (duration <=0) {
            alert("Date input seems not correct")
          return 
        } else {
            Client.updateUi(city, url, startDate, endDate, duration, weatherInfo)
        }      
    })
  }

export  function handleSubmit(event){
    event.preventDefault()
    let destinationInput = document.getElementById("destination").value
    let travelStartDate = document.getElementById("travelStartDate").value
    let travelEndDate = document.getElementById("travelEndDate").value
    console.log(destinationInput)
    if (destinationInput===""){
        return alert("Please fill your destination")
    } else {
        getLocation(destinationInput, travelStartDate, travelEndDate)
    }    
  }
   



