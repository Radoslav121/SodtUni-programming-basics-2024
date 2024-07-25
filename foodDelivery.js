function foodDelivery(input) {

     let chikenMenuCount = Number(input[0])
     let fishMenuCount = Number(input[1])
     let vegetarianMenuCount = Number(input[2])

     let chikenMenuPrice = 10.35
     let fishMenuPrice = 12.40
     let vegetarianMenuPrice = 8.15

     let totalChikenMenuPrice = chikenMenuCount * chikenMenuPrice
     let totalFishMenuPrice = fishMenuCount * fishMenuPrice
     let totalVegetarianMenuPrice = vegetarianMenuCount * vegetarianMenuPrice

     let currentPrice = totalChikenMenuPrice + totalFishMenuPrice + totalVegetarianMenuPrice
     let dessertPrice = currentPrice * 0.20
     let totalPrice = currentPrice + dessertPrice + 2.50
     console.log(totalPrice);

}
foodDelivery(["2 ",  "4 ", "3 "])



/*

Напишете програма, която изчислява колко ще струва на група хора да си поръчат храна за вкъщи.

Групата ще си поръча и десерт, чиято цена е равна на 20% от общата сметка (без доставката).

Цената на доставка е 2.50 лв и се начислява най-накрая.

*/