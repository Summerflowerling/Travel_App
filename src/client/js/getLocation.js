function getLocation(){
    console.log("show me")
}

function handleSubmit(event){
    event.preventDefault()
    const destinaitonInput = document.getElementById("destination").value

    console.log(destinaitonInput)
  

}


export {getLocation, handleSubmit}