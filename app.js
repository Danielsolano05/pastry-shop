'use strict'

let userName = prompt('What is your name?');
console.log('Hello', + userName); 


let pastry = prompt('on a scale of how much do you like pastrys (1-10)');
let message;

if (pastry >= 7){
    message = 'love pastrys';
} else if (pastry >=5 ){
    message = 'there ok';
} else if (pastry >=1){
    message = 'hate them';
} else {
    message = 'pastry likeness does not exist';
}

let sleep = 6;
if (sleep <= 6) {
    console.log('you need more sleep');
}


document.write('Hello ' + userName + '! ' + message);


