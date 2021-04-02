
const test = document.getElementById("test")
let travelStartDate = document.getElementById("travelStartDate").value
let travelEndDate = document.getElementById("travelEndDate")
console.log("id  test",travelEndDate)
console.log("id value test",travelStartDate)
const geonamesBaseUrl = "http://api.geonames.org/searchJSON?"
let placeName=""
let url
let city 



/*post request to local server and get the data back */


export  function getLocation(input) {
    
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
        city = json[0].data[0].city_name
        url = json[1]
        console.log("after id  test",travelEndDate)//test
        console.log("after id value test",travelStartDate)//test
        let duration=Client.getDays(travelStartDate, travelEndDate) 
        console.log("City name",city)//test
        //Client.updateUi(city, url, start, end, duration)
    })

       
  }


 

export  function handleSubmit(event){
    event.preventDefault()
    let destinationInput = document.getElementById("destination").value
    result.innerHTML=`<p>${destinationInput}</p>`
    console.log(destinationInput)//test
    getLocation(destinationInput)
    
  }
   



