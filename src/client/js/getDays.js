
// One day Time in ms (milliseconds)
let oneDayMs = 1000 * 60 * 60 * 24
let today = new Date();

// Calculate the trip duration
export function getDays (inputStartDate, inputEndDate){

    let todayDate = today.getDate()
    let todayMonth = today.getMonth()+1
    console.log("todayDate", todayDate)
    console.log("todayMonth", todayMonth)
    

    let travelStart = new Date (inputStartDate)
    let travelEnd = new Date (inputEndDate)
    let theStartDate = travelStart.getDate()
    let theStartMonth = travelStart.getMonth()+1
    /*
    let theEndDate = travelEnd.getDate()
    let theEndMonth = travelEnd.getMonth()+1
    */
   if (theStartMonth < todayMonth || (theStartMonth === todayMonth && theStartDate<todayDate)){
       return alert("You can't travel to the past. Please check your date again")
   } 

    console.log("travelStartDate", travelStart)
    console.log("travelEndDate", travelEnd )
    // To calculate the time difference of two dates
    let differenceInTime = travelEnd.getTime() - travelStart.getTime();
  
    // To calculate the no. of days between two dates
    let differenceInDays = differenceInTime / (oneDayMs);
    console.log(Math.round(differenceInDays))
    let duration = Math.round(differenceInDays)
    
        return duration
    
}