function hotelRoom(input) {

    let month = input[0];
    let numberOfNight = Number(input[1]);
    let studioPrice = 0.0;
    let apartmentPrice = 0.0;

    switch(month) {
        case 'May':
        case 'October':
            studioPrice = 50
            if(numberOfNight > 14) {
                studioPrice = studioPrice - studioPrice * 0.30
            } else if(numberOfNight > 7) {
                studioPrice = studioPrice - studioPrice * 0.05
            }
            apartmentPrice = 65         
            break;
        case 'June': 
        case 'September':
             studioPrice = 75.20
             if(numberOfNight > 14) {
                studioPrice = studioPrice - studioPrice * 0.20
             }
             apartmentPrice = 68.70
             break;
        case 'July':
        case 'August':
            studioPrice = 76
            apartmentPrice = 77
            break;        
    }

    if(numberOfNight > 14) {
        apartmentPrice = apartmentPrice - apartmentPrice * 0.10
    }
    
    console.log(`Apartment: ${(apartmentPrice * numberOfNight).toFixed(2)} lv.`);
    console.log(`Studio: ${(studioPrice * numberOfNight).toFixed(2)} lv.`);
    

}
hotelRoom(["August",
    "20"])
    
    
    
    
    
    