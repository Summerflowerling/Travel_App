export function updateUi (location, imgUrl, start, end, dayInfo, weatherInfo){
    
    let {temp} = weatherInfo
    let {icon, description} = weatherInfo.weather
    let testArea = document.getElementById("result")
    let countDate =  0
    console.log(temp,icon,description)
   
    testArea.innerHTML = `
        <h1>Travel Info</h1>
        <div id="result-text">
            <h2>Destination:${location}</h2>
            <h3>Start Day:${start}</h3>
            <h3>Start Day:${end}</h3>
            <h3>Trip duration:${dayInfo.duration}</h3>
        </div>
        <img id="result-photo" src=${imgUrl} alt="scene in ${location}">
        <div id="result-weather">
        <h3 id="result-weather-title">Local Weather</h3>
        </div>
    `
   const localWeatherSection = document.getElementById("result-weather-title")
   //check if duration is bigger than 14 days. Want to return max 14 days weather forecast
    while(countDate < dayInfo.duration){
        let newDiv =  document.createElement("div")
        let resultSectionDay = document.createElement("p")
        let resultSectionWeatherIcon = document.createElement("img")
        newDiv.setAttribute("id", countDate+1)
        newDiv.style.backgroundColor = "red"
        resultSectionDay.innerText =countDate+1
        localWeatherSection.insertAdjacentElement("afterend", newDiv)
        localWeatherSection.appendChild(resultSectionDay)
        localWeatherSection.appendChild(resultSectionWeatherIcon)
        countDate++
        console.log(countDate)
     }

}
// start working with CSS 