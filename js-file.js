numberToDisplay = 0;
firstNumber = 0;
secondNumber = 0;
firstNumberInput = true;

const numberButtons = document.querySelectorAll('.number')
const multiplyButton = document.getElementById('multiply')
const addButton = document.getElementById('add')
const divideButton = document.getElementById('divide')
const subtractButton = document.getElementById('subtract')
const clearButton = document.getElementById('clear')
const equalButton = document.getElementById('equal')


numberButtons.forEach((number) => {number.addEventListener('click', clickNumberAction)});
/* numberButtons.addEventListener('click', clickNumberAction); */
multiplyButton.addEventListener('click', clickOperatorAction);
addButton.addEventListener('click', clickOperatorAction);
divideButton.addEventListener('click', clickOperatorAction);
subtractButton.addEventListener('click', clickOperatorAction);
clearButton.addEventListener('click', clickClearAction);
equalButton.addEventListener('click', clickEqualAction);

function clickClearAction(){
    firstNumber = 0;
    secondNumber = 0;
    firstNumberInput = true;
    updateTopDisplay(0)
    updateBottomDisplay(0)
}

function clickEqualAction(){
    if (operatorPressed == "add") {
        answer = add(secondNumber, firstNumber)
        updateTopDisplay(`${secondNumber} ${operatorSign} ${firstNumber} =`)
        updateBottomDisplay(answer)
    }
}
    
function add(num, num2) {
    sum = +num + +num2;
    return sum
};

function subtract(num, num2){
    difference = num-num2
    return difference
};

function divide(num, num2){
    quotient = num/num2
    return quotient
};  

function multiply(num, num2) {
    factor = num*num2
    return factor
};

function updateTopDisplay(topTextToDisplay){
    const topDisplayDiv = document.getElementById('topText');
    topDisplayDiv.textContent = topTextToDisplay;
}

function updateBottomDisplay(bottomTextToDisplay) {
    const displayDiv = document.getElementById('bottomText');
    displayDiv.textContent = bottomTextToDisplay;
}

function operatorIDToOperatorSign(buttonClicked) {
    /*Checks what operation should be done by what button was pressed */
    const operatorConversionTable = 
    {"x": "multiply",
    "÷": "divide", 
    "+": "add",
    "-": "subtract",
    "clear": "clear",
}
    //Finds key from conversion table by looking at button clicked
    const operator = Object.keys(operatorConversionTable).find(key => 
        operatorConversionTable[key].includes(buttonClicked));
    return operator;
}

function clickOperatorAction(event){
    /*Retrive which button was clicked convert, button
    into correct sign and update display */
    operatorPressed = event.target.id
    operatorSign = operatorIDToOperatorSign(operatorPressed)
    secondNumber = firstNumber;
    topTextToDisplay = `${secondNumber} ${operatorSign}`
    updateTopDisplay(topTextToDisplay)
    //User need to be able to input a new number
    firstNumber = 0;    
}

function clickNumberAction(event){
    console.log(event.target.innerText)
    numberClicked = event.target.innerText
    if(firstNumber == 0) {
        firstNumber = numberClicked;
        updateBottomDisplay(numberClicked)
    } else {
        firstNumber = firstNumber+numberClicked;
        updateBottomDisplay(firstNumber)
    }
}

/* ALL BELOW SHOULD BE REWRITTEN AS SEVERAL FUNCTIONS
    THE CODE DOES WORK THOUGH */

//Listens for button (number) click
/* const buttons = document.querySelectorAll('.number');
    buttons.forEach((button) => {
    button.addEventListener('click', () => {
        buttonClicked = button.innerHTML;
            //Comment what below does
            if(numberToDisplay == 0) {
                numberToDisplay = buttonClicked;
                updateBottomDisplay(numberToDisplay)
            } else {
                    numberToDisplay = numberToDisplay+buttonClicked;
                    updateBottomDisplay(numberToDisplay)
                }
                console.log(numberToDisplay)
    });
    }); */




    /* måste byta namn på numberToDisplay och kanske number 2. Förtydliga det. */