function lunchBreak(input) {

    let nameOfSeries = input[0];
    let episodeDuration = Number(input[1]);
    let breakDuration = Number(input[2]);
    
    let lunchtime = breakDuration / 8
    let timeForRelax = breakDuration / 4

    let totalTime = lunchtime + timeForRelax + episodeDuration

    if(totalTime <= breakDuration) {
        console.log(`You have enough time to watch ${nameOfSeries} and left with ${Math.ceil(breakDuration - totalTime)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${nameOfSeries}, you need ${Math.ceil(totalTime - breakDuration)} more minutes.`);
    }


}
lunchBreak(["Game of Thrones",
    "60",
    "96"])
