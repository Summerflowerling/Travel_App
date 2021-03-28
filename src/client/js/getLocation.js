const test = document.getElementById("test")
const geonamesBaseUrl = "http://api.geonames.org/searchJSON?"
let placeName=""
let lat
let lng



/*fetch data from open weather api*/

export  async function getLocation(input) {
    
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
    })
       
  }


 

export  function handleSubmit(event){
    event.preventDefault()
    let destinationInput = document.getElementById("destination").value
    test.innerHTML=`<p>${destinationInput}</p>`
    console.log(destinationInput)
    getLocation(destinationInput)
    
  }
   



