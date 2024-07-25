function fruitShop(input) {

let product = input[0];
let dayOfWeekend = input[1];
let quantity = Number(input[2]);
let sum = 0.0

switch(dayOfWeekend) {
    case 'Monday': 
    case 'Tuesday': 
    case 'Wednesday': 
    case 'Thursda': 
    case 'Friday': 
    if(product === 'banana') {
        sum = (quantity * 2.50).toFixed(2)
        console.log(sum);
    } else if(product === 'apple') {
        sum = (quantity * 1.20).toFixed(2)
        console.log(sum);
    } else if(product === 'orange') {
        sum = (quantity * 0.85).toFixed(2)
        console.log(sum);
    } else if(product === 'grapefruit') {
        sum = (quantity * 1.45).toFixed(2)
        console.log(sum);
    } else if(product === 'kiwi') {
        sum = (quantity * 2.70).toFixed(2)
        console.log(sum);
    } else if(product === 'pineapple') {
        sum = (quantity * 5.50).toFixed(2)
        console.log(sum);
    } else if(product === 'grapes') {
        sum = (quantity * 3.85).toFixed(2)
        console.log(sum);
    }else {
        console.log('error');
    }
    break;
    case 'Saturday':
    case 'Sunday':
        if(product === 'banana') {
            sum = (quantity * 2.70).toFixed(2)
            console.log(sum);
        } else if(product === 'apple') {
            sum = (quantity * 1.25).toFixed(2)
            console.log(sum);
        } else if(product === 'orange') {
            sum = (quantity * 0.90).toFixed(2)
            console.log(sum);
        } else if(product === 'grapefruit') {
            sum = (quantity * 1.60).toFixed(2)
            console.log(sum);
        } else if(product === 'kiwi') {
            sum = (quantity * 3.00).toFixed(2)
            console.log(sum);
        } else if(product === 'pineapple') {
            sum = (quantity * 5.60).toFixed(2)
            console.log(sum);
        } else if(product === 'grapes') {
            sum = (quantity * 4.20).toFixed(2)
            console.log(sum);
        } else {
            console.log('error');
        }
break;
default:console.log('error');
}

}
fruitShop(["apple",
    "Tuesday",
    "2"])
    
    
    
    
    
    
    
    
    
    
    
    
    
    