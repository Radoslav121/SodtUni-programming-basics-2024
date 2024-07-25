function suppliesForSchool(input) {

    let penPackageCount = Number(input[0]);
    let markersPackageCount = Number(input[1]);
    let litersOfDetergent = Number(input[2]);
    let discountpercent = Number(input[3]) / 100;
    let penPrice = penPackageCount * 5.80;
    let markersPrice = markersPackageCount * 7.20;
    let detergentPrice = litersOfDetergent * 1.20;
    let price = penPrice + markersPrice + detergentPrice;
    let discount = price * discountpercent;
    let finalPrice = price - discount;
    console.log(finalPrice);

}
suppliesForSchool(["2 ", "3 ", "4 ", "25 "]);