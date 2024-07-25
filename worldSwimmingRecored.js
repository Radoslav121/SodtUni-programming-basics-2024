function worldSwimmingRecored(input) {

    let recordInSeconds = Number(input[0]);
    let distansInMetters = Number(input[1]);
    let timeForOneMetter = Number(input[2]);

    let timeWhitoutDelay = timeForOneMetter * distansInMetters
    let delay = Math.floor(distansInMetters / 15) * 12.5
    
    let newRecord = delay + timeWhitoutDelay
    

    if(newRecord < recordInSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${(newRecord).toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(newRecord - recordInSeconds).toFixed(2)} seconds slower.`);
    }
    
    
}
worldSwimmingRecored(["10464",
    "1500",
    "20"])
    