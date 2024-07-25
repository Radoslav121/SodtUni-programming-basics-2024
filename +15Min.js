function Min(input) {

    let inputHour = Number(input[0]);
    let inputMinut = Number(input[1]);
    let totalTime = inputHour * 60 + inputMinut + 15
    
    let hours = Math.floor(totalTime / 60)
    let minutes = totalTime % 60

    if(hours > 23) {
        hours = 0 
    }
    
    if(minutes < 10) {
        console.log(`${hours}:0${minutes}`);
    } else {
        console.log(`${hours}:${minutes}`);
    }

}
Min(["1", "46"])