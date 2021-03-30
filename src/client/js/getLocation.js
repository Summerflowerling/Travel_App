
const test = document.getElementById("test")
const geonamesBaseUrl = "http://api.geonames.org/searchJSON?"
let placeName=""
let lat
let lng
let country 



/*post request to local server and get the data back */

<<<<<<< HEAD
export  function getLocation(input) {
=======
export function getLocation(input) {
>>>>>>> f447c1fb130a0ec3f6225e42063ef8bcdc515a4c
    
    fetch('http://localhost:8080/getGeoname',{
        method: 'POST',
        credentials: 'same-origin',
       mode: 'cors',
        headers:{
            'Content-Type':'application/json',
        }, 
        body:JSON.stringify({"location":`${input}`}),
        
    })
    .then(res=> res.json())
    .then(json=>{
        console.log(json)
        lng = json.geonames[0].lng
        lat = json.geonames[0].lat
        country = json.geonames[0].countryName
        console.log("lng here",lng)
        console.log("lat here",lat)
        console.log("country here",country)
        
    })
       
  }


 

export  function handleSubmit(event){
    event.preventDefault()
    let destinationInput = document.getElementById("destination").value
    test.innerHTML=`<p>${destinationInput}</p>`
    console.log(destinationInput)
    getLocation(destinationInput)
    Client.getDays(4,1,2021)
    Client.updateUi()
    
  }
   



