function godzilaVsKong(input) {

    let filmBudget = Number(input[0]);
    let statistsCount = Number(input[1]);
    let statistClothesPrice = Number(input[2]);

    let directorPrice = filmBudget * 0.10
    let totalStatistsClothesPrice = statistClothesPrice * statistsCount
    
    if(statistsCount > 150) {
        totalStatistsClothesPrice = totalStatistsClothesPrice - totalStatistsClothesPrice * 0.10
    }
    
    let totalSum = directorPrice + totalStatistsClothesPrice

    if(totalSum > filmBudget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalSum - filmBudget).toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(filmBudget - totalSum).toFixed(2)} leva left.`);
    }

}
godzilaVsKong(["9587.88",
    "222",
    "55.68"])
    
    
    
    
    
    /*

Ако  парите за декора и дрехите са повече от бюджета:
o	"Not enough money!"
o	"Wingard needs {парите недостигащи за филма} leva more."
•	Ако парите за декора и дрехите са по малко или равни на бюджета:
o	"Action!" 
o	"Wingard starts filming with {останалите пари} leva left."
Резултатът трябва да е форматиран до втория знак след десетичната запетая.

    */