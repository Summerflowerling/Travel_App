export function getLocation(){
    console.log("show me")
}

export function handleSubmit(event){
    event.preventDefault()
    const destinaitonInput = document.getElementById("destination").value

    console.log(destinaitonInput)
  

}


