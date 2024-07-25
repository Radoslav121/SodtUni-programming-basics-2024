function rePainting(input) {

     let nylon = Number(input[0]);
     let paint = Number(input[1]);
     let tinner = Number(input[2]);
     let workHour = Number(input[3]);

     let nylonPrice = 1.50
     let paintPrice = 14.50
     let tinnerPrice = 5
     let pacage = 0.40

     paint = paint + paint * 0.10
     nylon = nylon + 2

     let totalNylonPrice = nylon * nylonPrice
     let totalPaintPrice = paint * paintPrice
     let totalTinnerPrice = tinner * tinnerPrice

     let currentSum = totalNylonPrice + totalPaintPrice + totalTinnerPrice + pacage
     let workexpenses = workHour * (currentSum * 0.30)
     let totalSum = currentSum + workexpenses
     console.log(totalSum);


}
rePainting(["5 ", "10 ", "10 ", "1 "]);


/*
За всеки случай, към необходимите материали, Румен иска да добави още 10% от количеството боя и 2 кв.м. найлон,
 разбира се и 0.40 лв. за торбички. Сумата, която се заплаща на майсторите за 1 час работа,
 е равна на 30% от сбора на всички разходи за материали
*/