function newHouse(input) {

let typeOfFlower = input[0];
let flowewrCount = Number(input[1]);
let budget = Number(input[2]);
let sum = 0

switch(typeOfFlower) {
    case 'Roses': 
       sum = flowewrCount * 5
       if(flowewrCount > 80) {
        sum = sum - sum * 0.10
       }
       break;
    case 'Dahlias':
        sum = flowewrCount * 3.80
        if(flowewrCount > 90) {
            sum = sum - sum * 0.15
        }
        break;
    case 'Tulips':
        sum = flowewrCount * 2.80
        if(flowewrCount > 80) {
            sum = sum - sum * 0.15
        }
        break;
    case 'Narcissus':
        sum = flowewrCount * 3
        if(flowewrCount < 120) {
            sum = sum + sum * 0.15
        }
        break;
    case 'Gladiolus':
        sum = flowewrCount * 2.50
        if(flowewrCount < 80) {
            sum = sum + sum * 0.20
        }
        break;
}

if(budget >= sum) {
    console.log(`Hey, you have a great garden with ${flowewrCount} ${typeOfFlower} and ${(budget - sum).toFixed(2)} leva left.`);
} else {
    console.log(`Not enough money, you need ${(sum - budget).toFixed(2)} leva more.`);
}
}
newHouse(["Gladiolus",
    "64",
    "160"])
    



