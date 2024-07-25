function tradeCommissions(input) {

let cityName = input[0];
let sales = Number(input[1]);
let sum = 0

switch(cityName) {
    case 'Sofia':
        if(sales >= 0 && sales <= 500) {
            sum = (sales * 0.05).toFixed(2)
            console.log(sum);
        } else if(sales > 500 && sales <= 1000) {
            sum = (sales * 0.07).toFixed(2)
            console.log(sum);
        } else if(sales > 1000 && sales <= 10000) {
            sum = (sales * 0.08).toFixed(2)
            console.log(sum);
        } else if(sales > 10000) {
            sum = (sales * 0.12).toFixed(2)
            console.log(sum);
        } else {
            console.log('error');
        }
        break;
    case 'Plovdiv':
        if(sales >= 0 && sales <= 500) {
            sum = (sales * 0.055).toFixed(2)
            console.log(sum);
        } else if(sales > 500 && sales <= 1000) {
            sum = (sales * 0.08).toFixed(2)
            console.log(sum);
        } else if(sales > 1000 && sales <= 10000) {
            sum = (sales * 0.12).toFixed(2)
            console.log(sum);
        } else if(sales > 10000) {
            sum = (sales * 0.145).toFixed(2)
            console.log(sum);
        } else {
            console.log('error');
        }
        break; 
    case 'Varna': 
    if(sales >= 0 && sales <= 500) {
        sum = (sales * 0.045).toFixed(2)
        console.log(sum);
    } else if(sales > 500 && sales <= 1000) {
        sum = (sales * 0.075).toFixed(2)
        console.log(sum);
    } else if(sales > 1000 && sales <= 10000) {
        sum = (sales * 0.10).toFixed(2)
        console.log(sum);
    } else if(sales > 10000) {
        sum = (sales * 0.13).toFixed(2)
        console.log(sum);
    } else {
        console.log('error');
    }
    break;
    default: console.log('error');   
}

}
tradeCommissions(["Plovdiv",
    "10000.01"])
    
    
    
    
