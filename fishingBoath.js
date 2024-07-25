function fishingBoath(input) {

    let groupBudget = Number(input[0]);
    let season = input[1];
    let fisherCount = Number(input[2]);
    let price = 0
    
    switch(season) {
        case 'Spring':
            price = 3000
            break;
        case 'Summer':
        case 'Autumn':
            price = 4200
            break;
        case 'Winter':
            price = 2600 
            break;
         } 

            if(fisherCount <= 6) {
                price = price - price * 0.10
            } else if(fisherCount >= 7 && fisherCount <= 11) {
                price = price - price * 0.15
            } else if(fisherCount > 12) {
                price = price - price * 0.25
            }

            if(fisherCount % 2 === 0 && season !== 'Autumn') {
                price = price - price * 0.05
            }
    
    if(groupBudget >= price) {
        console.log(`Yes! You have ${(groupBudget - price).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(price - groupBudget).toFixed(2)} leva.`);
    }

}
fishingBoath(["3600",
    "Autumn",
    "6"])

    
    
    
    
    

