let travelDate
let presentDate = new Date()
// One day Time in ms (milliseconds)
let oneDayMs = 1000 * 60 * 60 * 24

export function getDays (travelMonth, travelDay, travelYear){
    travelDate = new Date(`${travelMonth}/${travelDay}/${travelYear}`)
    // To calculate the time difference of two dates
    let differenceInTime = travelDate.getTime() - presentDate.getTime();
  
    // To calculate the no. of days between two dates
    let differenceInDays = differenceInTime / (oneDayMs);
    console.log(Math.round(differenceInDays))
}