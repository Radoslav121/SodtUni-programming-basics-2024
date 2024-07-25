function onTimeForTheExam(input) {

    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinute = Number(input[3]);
    
    let examStart = (examHour * 60 + examMinute)
    let arrrivalTime = (arrivalHour * 60 + arrivalMinute)

    let differens = Math.abs(examStart - arrrivalTime)
    let hours = Math.floor(differens / 60)
    let minutes = differens % 60

    if(arrrivalTime > examStart) {
        console.log('Late');

        if(differens < 60) {
            console.log(`${(minutes)} minutes after the start`);
        } else {
            if(minutes < 10) {
                console.log(`${hours}:0${(minutes)} hours after the start`);
            } else {
                console.log(`${hours}:${(minutes)} hours after the start`);
            }
        } 
    } else if(arrrivalTime === examStart || differens <= 30) {
        console.log('On time');

        if(differens < 60) {
            console.log(`${minutes} minutes before the start`);
          } else {
            if(minutes < 10) {
                console.log(`${hours}:0${minutes} hours before the start`);
            } else {
                console.log(`${hours}:${minutes} hours before the start`);
            }
          }
    } else if(arrrivalTime < examHour || differens > 30) {
      console.log('Early');
      
      if(differens < 60) {
        console.log(`${minutes} minutes before the start`);
      } else {
        if(minutes < 10) {
            console.log(`${hours}:0${minutes} hours before the start`);
        } else {
            console.log(`${hours}:${minutes} hours before the start`);
        }
      }
    }

}
onTimeForTheExam(["11",
    "30", "8",
"12"])

    

    

    
    
    
    

    
    