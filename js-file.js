numberToDisplay = 0;
secondNumber = 0;
firstNumberInput = true;
operation = "";
/* operatorSign = ""; */

const multiplyButton = document.getElementById('multiply')
const addButton = document.getElementById('add')
const divideButton = document.getElementById('divide')
const subtractButton = document.getElementById('subtract')
const clearButton = document.getElementById('clear')
const equalButton = document.getElementById('equal')

multiplyButton.addEventListener('click', clickAction);
addButton.addEventListener('click', clickAction);
divideButton.addEventListener('click', clickAction);
subtractButton.addEventListener('click', clickAction);
clearButton.addEventListener('click', clickClearAction);
equalButton.addEventListener('click', clickEqualAction);



function clickClearAction(){
    /* To be written */
}

function operator(num, num2, operation){

    yalla = `${operation}(${num}, ${num2})`
    /* answer = operation(num, num2)  */
    console.log(yalla)
   /*  return answer */
};
    
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

function updateDisplay(numberToDisplay) {
    const displayDiv = document.getElementById('bottomText');
    displayDiv.textContent = numberToDisplay;
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

function clickAction(event){
    /*Retrive which button was clicked convert, button
    into correct sign and update display */
    operatorPressed = event.target.id
    operatorSign = operatorIDToOperatorSign(operatorPressed)
    secondNumber = numberToDisplay
    topTextToDisplay = `${secondNumber} ${operatorSign}`
    updateTopDisplay(topTextToDisplay)
    //User need to be able to input a new number
    numberToDisplay = 0;    
}

/* ALL BELOW SHOULD BE REWRITTEN AS SEVERAL FUNCTIONS
    THE CODE DOES WORK THOUGH */

//Listens for button (number) click
const buttons = document.querySelectorAll('.number');
    buttons.forEach((button) => {
    button.addEventListener('click', () => {
        buttonClicked = button.innerHTML;
            //Comment what below does
            if(numberToDisplay == 0) {
                numberToDisplay = buttonClicked;
                updateDisplay(numberToDisplay)
            } else {
                    numberToDisplay = numberToDisplay+buttonClicked;
                    updateDisplay(numberToDisplay)
                }
                console.log(numberToDisplay)
    });
    });

    function clickEqualAction(){
        if (operatorPressed == "add") {
            answer = add(secondNumber, numberToDisplay)
            updateTopDisplay(`${secondNumber} ${operatorSign} ${numberToDisplay} =`)
            updateDisplay(answer)
        }
    }


    /* Måste byta namn på updateDisplay till bottomDisplay, 
    måste byta namn på numberToDisplay och kanske number 2. Förtydliga det. */