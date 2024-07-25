function shopForChildren(input) {

    let excursionPrice = Number(input[0]);
    let puzzlesCount = Number(input[1]);
    let dollCount = Number(input[2]);
    let teddyBearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let puzzlePrice = 2.60, dollPrice = 3, teddyBearPrice = 4.10, minionPrice = 8.20, truckPrice = 2

    let toysCount = puzzlesCount + dollCount + teddyBearsCount + minionsCount + trucksCount
    let totalSum = (puzzlePrice * puzzlesCount) + (dollPrice * dollCount) + (teddyBearPrice * teddyBearsCount) + (minionPrice * minionsCount) + (truckPrice * trucksCount)

    if(toysCount >= 50) {
        let discount = totalSum * 0.25
        totalSum = totalSum - discount  
    } 

    totalSum = totalSum - totalSum * 0.10

    if(totalSum >= excursionPrice) {
       console.log(`Yes! ${(totalSum - excursionPrice).toFixed(2)} lv left.`); 
    } else {
        console.log(`Not enough money! ${(excursionPrice - totalSum).toFixed(2)} lv needed.`);
    }

}
shopForChildren(["320",
"8",
"2",
"5",
"5",
"1"])

    
    /* 
     •	Ако парите са достатъчни се отпечатва:
o	"Yes! {оставащите пари} lv left."
•	Ако парите НЕ са достатъчни се отпечатва:
o	"Not enough money! {недостигащите пари} lv needed."




    */