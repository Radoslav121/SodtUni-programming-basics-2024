function skiTrip(input) {

    let dayCount = Number(input[0]);
    let typeOfRoom = input [1];
    let rate = input[2];
    let price = 0.0;

    let roomForOnePersonPrice = 18 * (dayCount - 1);
    let apartmentPrice = 25 * (dayCount - 1);
    let presidentApartmentPrice = 35 * (dayCount - 1);

    switch(typeOfRoom) {
        case 'room for one person':
            price = roomForOnePersonPrice;
            break;
        case 'apartment':
            if(dayCount < 10) {
                price = apartmentPrice - apartmentPrice * 0.30;
            } else if(dayCount >= 10 && dayCount <= 15) {
                price = apartmentPrice - apartmentPrice * 0.35;
            } else if(dayCount > 15) {
                price = apartmentPrice - apartmentPrice * 0.50;
            }
            break;
        case 'president apartment':
            if(dayCount > 15) {
                price = presidentApartmentPrice - presidentApartmentPrice * 0.20;
            } else if(dayCount >= 10 && dayCount <= 15) {
                price = presidentApartmentPrice - presidentApartmentPrice * 0.15;
            } else {
                price = presidentApartmentPrice - presidentApartmentPrice * 0.10;
            } break;
    }

    switch(rate) {
        case 'positive':
            price += price * 0.25
            break;
        case 'negative':
            price -= price * 0.10
            break;
    }

    console.log((price).toFixed(2));


}
skiTrip(["14",
    "apartment",
    "positive"])
    
    
    
    
    