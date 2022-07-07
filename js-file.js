numberToDisplay = 0;
firstNumber = 0;
secondNumber = 0;
firstOperatorClick = true;
secondOperatorSign = ""
lastClick = ""
decimalPressed = false;

const numberButtons = document.querySelectorAll('.number')
const multiplyButton = document.getElementById('multiply')
const addButton = document.getElementById('add')
const divideButton = document.getElementById('divide')
const subtractButton = document.getElementById('subtract')
const clearButton = document.getElementById('clear')
const equalButton = document.getElementById('equal')
const backspaceButton = document.getElementById('backspace')
const decimalButton = document.getElementById('decimal')

/* Mainly wanted to practice an arrow function. */
let clickBackspaceAction = backspace => {if(lastClick == "number") updateBottomDisplay(firstNumber =
    (firstNumber-(firstNumber%10))/10)};

numberButtons.forEach((number) => {number.addEventListener('click', clickNumberAction)});
multiplyButton.addEventListener('click', clickOperatorAction);
addButton.addEventListener('click', clickOperatorAction);
divideButton.addEventListener('click', clickOperatorAction);
subtractButton.addEventListener('click', clickOperatorAction);
clearButton.addEventListener('click', clickClearAction);
equalButton.addEventListener('click', clickEqualAction);
backspaceButton.addEventListener('click', clickBackspaceAction);
decimalButton.addEventListener('click', clickDecimalAction);

function clickClearAction(){
    /*Reset calculator state so user can start fresh */
    lastClick = "operator"
    firstNumber = 0;
    secondNumber = 0;
    operator = ""
    answer = ""
    firstOperatorClick = true;
    updateTopDisplay(0)
    updateBottomDisplay(0)
}

function clickDecimalAction(){
    /* Not done */
    if(decimalPressed) {
        console.log("has been pressed");
    } else {console.log("has not been pressed");}
    decimalPressed = true;
}

function updateDisplayOnAnswer() {
    updateTopDisplay(`${secondNumber} ${operatorSign} ${firstNumber} =`)
    updateBottomDisplay(answer)
    secondNumber = firstNumber;
    firstNumber = answer;
}

function clickEqualAction(){
    if(lastClick != "operator" || (operatorPressed == lastOperationPressed && firstNumber != "")) {
        lastClick = "operator"
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
            firstNumber = "";
            secondNumber = answer;
            decimalPressed = false;
        }
    } else {
        //Equal sign being pressed after pressing an operator, we want nothing done
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
    lastClick = "operator"
    operatorPressed = event.target.id
    operatorSign = operatorIDToOperatorSign(operatorPressed)
    if(firstOperatorClick) {
        secondNumber = firstNumber;
        topTextToDisplay = `${secondNumber} ${operatorSign}`
        updateTopDisplay(topTextToDisplay)
        //User need to be able to input a new number
        firstNumber = 0;
        firstOperatorClick = false;
        //If same operation is pressed twice we want an answer produced
    } else if (operatorPressed == lastOperationPressed) {
        clickEqualAction()
    } else {
        //If two operations are pressed after each other, we use last one
        topTextToDisplay = `${secondNumber} ${operatorSign}`
        updateTopDisplay(topTextToDisplay)
        
    }
    //Makes sure we can compare if same operation is pressed twice above
    lastOperationPressed = operatorPressed;
    //Without this operator sign can't display as top-text after pressing equal
    secondOperatorSign = operatorSign;
    
}

function clickNumberAction(event){
    /*Updates display if a number is clicked */
    lastClick = "number"
    numberClicked = event.target.innerText
    if(firstNumber == 0) {
        firstNumber = numberClicked;
        updateBottomDisplay(numberClicked)
    } else {
        firstNumber = firstNumber+numberClicked;
        updateBottomDisplay(firstNumber)
    }
}