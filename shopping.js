function shopping(input) {

    let peturBuget = Number(input[0]);
    let videocardCount = Number(input[1]);
    let procesorCount = Number(input[2]);
    let ramCount = Number(input[3]);

    let videocardPrice = 250
    let procesorPrice = (videocardPrice * videocardCount) * 0.35
    let ramPrice = (videocardPrice * videocardCount) * 0.10

    let totalSum = (videocardPrice * videocardCount) + (procesorPrice * procesorCount) + (ramPrice * ramCount)

    if(videocardCount > procesorCount) {
        totalSum = totalSum - totalSum * 0.15
    }

    if(peturBuget >= totalSum) {
        console.log(`You have ${(peturBuget - totalSum).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(totalSum - peturBuget).toFixed(2)} leva more!`);
    }


}
shopping(["920.45",
    "3",
    "1",
    "1"])
    
    