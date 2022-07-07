numberToDisplay = 0;
firstNumber = 0;
secondNumber = 0;
firstOperatorClick = true;
secondOperatorSign = ""

const numberButtons = document.querySelectorAll('.number')
const multiplyButton = document.getElementById('multiply')
const addButton = document.getElementById('add')
const divideButton = document.getElementById('divide')
const subtractButton = document.getElementById('subtract')
const clearButton = document.getElementById('clear')
const equalButton = document.getElementById('equal')

numberButtons.forEach((number) => {number.addEventListener('click', clickNumberAction)});
multiplyButton.addEventListener('click', clickOperatorAction);
addButton.addEventListener('click', clickOperatorAction);
divideButton.addEventListener('click', clickOperatorAction);
subtractButton.addEventListener('click', clickOperatorAction);
clearButton.addEventListener('click', clickClearAction);
equalButton.addEventListener('click', clickEqualAction);

function clickClearAction(){
    /*Reset calculator state so user can start fresh */
    firstNumber = 0;
    secondNumber = 0;
    operator = ""
    answer = 0
    firstOperatorClick = true;
    updateTopDisplay(0)
    updateBottomDisplay(0)
}

function updateDisplayOnAnswer() {
    updateTopDisplay(`${secondNumber} ${operatorSign} ${firstNumber} =`)
    updateBottomDisplay(answer)
    secondNumber = firstNumber;
    firstNumber = answer;
}

function clickEqualAction(){
    /* Picks correct operation for getting an answer */
    if (operatorPressed == "add") {
        answer = add(secondNumber, firstNumber)
    } else if (operatorPressed == "multiply") {
        answer = multiply(secondNumber, firstNumber)
    } else if (operatorPressed == "divide") {
        answer = divide(secondNumber, firstNumber)
    } else if (operatorPressed == "subtract") {
        answer = subtract(secondNumber, firstNumber)
    } else {

    }
    //Displays text differently if an operator has not been pressed
    if (firstOperatorClick) {
        updateDisplayOnAnswer()
        //Displays text differently if an operator has been pressed
    } else {
        operatorPressed = event.target.id
        operatorSign = operatorIDToOperatorSign(operatorPressed)
        console.log(operatorPressed)
        console.log(operatorSign)
        updateBottomDisplay(`${answer}`)
            /*If the equal sign is pressed we want the last
            calculation to display at the top */
            if (operatorPressed == "equal") {
                updateTopDisplay(`${secondNumber} ${secondOperatorSign} ${firstNumber} =`)
                //If it's not an equal sign clicked, we only display answer and operator sign
            } else {
                updateTopDisplay(`${answer} ${operatorSign}`)
            }
        //New numbers can be typed, and saves the last answer to be used in next calculation
        firstNumber = 0;
        secondNumber = answer;
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
    "": "equal",
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
    if(firstOperatorClick) {
        operatorPressed = event.target.id
        operatorSign = operatorIDToOperatorSign(operatorPressed)
        secondNumber = firstNumber;
        topTextToDisplay = `${secondNumber} ${operatorSign}`
        updateTopDisplay(topTextToDisplay)
        //User need to be able to input a new number
        firstNumber = 0;
        firstOperatorClick = false;
    } else {
        clickEqualAction()
    }
    //Without this operator sign can't display as top-text after pressing equal
    secondOperatorSign = operatorSign;
}

function clickNumberAction(event){
    /*Updates display if a number is clicked */
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