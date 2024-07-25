function yardGreening(input) {

     let yard = Number(input[0])
     let price = yard * 7.61
     let discout = 0.18
     let finalDiscound = discout * price
     let finalPrice = price - finalDiscound
     console.log(`The final price is: ${finalPrice} lv.`);
     console.log(`The discount is: ${finalDiscound} lv.`)



}
yardGreening([["550"]]);