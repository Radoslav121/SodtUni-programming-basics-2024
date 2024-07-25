function operationBetwenNumbers(input) {

    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let operacion = input[2];
    let result = 0;
    let evenOrOdd = '';

    switch(operacion) {
        case '+':
            result = num1 + num2;
         break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2
            break;
        case '/':
            result = num1 / num2
            break;    
        case '%':
            result = num1 % num2      

    }

    if(result % 2 === 0) {
        evenOrOdd = 'even'
    } else {
        evenOrOdd = 'odd'
    }
    
    if(num1 === 0 || num2 === 0) {
            console.log(`Cannot divide ${num1} by zero`);
    } else if(operacion === '+' || operacion === '-' || operacion === '*' ) {
        console.log(`${num1} ${operacion} ${num2} = ${(result)} - ${evenOrOdd}`);
    } else if(operacion === '/') {
        console.log(`${num1} / ${num2} = ${(result).toFixed(2)}`);
    } else if(operacion === '%') {
        console.log(`${num1} % ${num2} = ${(result)}`);
    } else if(operacion = num1 / num2 && num1 === 0 || num2 === 0) {
        console.log(`Cannot divide ${num1} by zero`);
    }
        
}
operationBetwenNumbers(["10",
    "3",
    "%"])
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    