function cinema(input) {

    let typeOfProjection = input[0];
    let lines = Number(input[1]);
    let colums = Number(input[2]);
    let price = 0

    switch(typeOfProjection) {
        case 'Premiere': 
          price = (lines * colums * 12.00).toFixed(2)
          console.log(price);
        break;
        case 'Normal':
          price = (lines * colums * 7.50).toFixed(2)
          console.log(price);
          break;
        case 'Discount':
            price = (lines * colums * 5.00).toFixed(2)
            console.log(price);
        
    }

}
cinema(["Discount",
    "12",
    "30"])
    
    
    