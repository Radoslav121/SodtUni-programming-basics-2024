function basketballEquipment(input) {

     let taxesPerYear = Number(input[0])
     let basketballShoes = taxesPerYear - taxesPerYear * 0.40
     let basketballDress = basketballShoes - basketballShoes * 0.20
     let basketballBall = basketballDress / 4
     let basketballAccessoires = basketballBall / 5
     let totalPrice = basketballShoes + basketballDress + basketballBall + basketballAccessoires + taxesPerYear
     console.log(totalPrice);

}
basketballEquipment(["365"])


/*
• Баскетболни кецове – цената им е 40% по-малка от таксата за една година

• Баскетболен екип – цената му е 20% по-евтина от тази на кецовете

• Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип

Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка
*/