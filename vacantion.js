 function vacantion(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let location = ''
    let variantsOfVacation = ''
    let paidSum = 0

    if(budget <= 100) {
        location = 'Bulgaria'
        switch(season) {
            case 'summer':
                variantsOfVacation = 'Camp'
                paidSum = budget - budget * 0.30;
                break;
            case 'winter':
                variantsOfVacation = 'Hotel'
                paidSum = budget - budget * 0.70;
                break;
        }
    } else if(budget <= 1000) {
        location = 'Balkans'
        switch(season) {
            case 'summer':
                variantsOfVacation = 'Camp'
                paidSum = budget - budget * 0.40; 
                break;

            case 'winter':
                variantsOfVacation = 'Hotel'
                paidSum = budget - budget * 0.80; 
                break;
        }
    } else if(budget > 1000) {
        location = 'Europe'
        switch(location) {
            case 'Europe':
                 variantsOfVacation = 'Hotel'
                paidSum = budget - budget * 0.90; 
                break;
        }
    }
    
    console.log(`Somewhere in ${location}`);
    console.log(`${variantsOfVacation} - ${(budget - paidSum).toFixed(2)}`);
    
    
 }
 vacantion(["1500", "summer"])