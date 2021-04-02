export function updateUi (location, imgUrl, start, end, duration){
    console.log("updated later")
    let testArea = document.getElementById("result")
    let countDate =  0
   
    testArea.innerHTML = `
        <h1>Travel Info</h1>
        <div id="result-text">
            <h2>Destination:${location}</h2>
            <h3>Start Day:${start}</h3>
            <h3>Start Day:${end}</h3>
            <h3>Trip duration:${duration}</h3>
        </div>
        <img id="result-photo" src=${imgUrl} alt="scene in ${location}">
        <div id="result-weather">
        <h3 id="result-weather-title">Local Weather</h3>
        </div>
    `
   const localWeatherSection = document.getElementById("result-weather-title")
    while(countDate < duration){
        let newDiv =  document.createElement("div")
        let resultSectionDay = document.createElement("p")
        let resultSectionWeatherIcon = document.createElement("img")
        newDiv.setAttribute("id", countDate)
        newDiv.style.backgroundColor = "red"
        newDiv.innerText =countDate
        localWeatherSection.insertAdjacentElement("afterend", newDiv)
        localWeatherSection.appendChild(resultSectionDay)
        localWeatherSection.appendChild(resultSectionWeatherIcon)
        countDate++
        console.log(countDate)
     }

}
//Fix the data inside result weather section and start working with CSS 