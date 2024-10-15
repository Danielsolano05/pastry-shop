
// Function to ask for the user's name
function yourName() {
    let name = prompt('What is your name?');
    return name;  // Return the user's name
}

// Function to get the user's preference for pastries
function loveOfpastry() {
    let pastry = prompt('On a scale of 1-10, how much do you like pastries?');
    let message = '';
    if (pastry >= 7) {
        message = 'love pastries';
    } else if (pastry >= 5) {
        message = 'they are okay';
    } else if (pastry >= 1) {
        message = 'hate them';
    } else {
        message = 'pastry likeness does not exist';
    }
    
    return message;
}

function checkSleep() {
    let sleep = 6;  // Hardcoded sleep value, could also be a prompt
    let sleepMessage = '';
    if (sleep <= 6) {
        sleepMessage = 'You need more sleep.';
    } else {
        sleepMessage = 'You have enough sleep.';
    }
    return sleepMessage;  // Return the sleep message
}

// Call functions to get userName, pastry message, and sleep message
let userName = yourName();              // Define userName
let message = loveOfpastry();           // Define message from loveOfpastry()
let sleepMessage = checkSleep();        // Get the sleep message

// Display the results using document.write
document.write('Hello ' + userName + '! ' + message + '<br>' + sleepMessage);