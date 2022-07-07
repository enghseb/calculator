numberToDisplay = 0;
secondNumber = 0;
firstNumberInput = true;

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

function clickEqualAction(){
    console.log("najs")
}

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
    sum = num+num2
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
    OperatorSign = operatorIDToOperatorSign(operatorPressed)
    secondNumber = numberToDisplay
    topTextToDisplay = `${secondNumber} ${OperatorSign}`
    updateTopDisplay(topTextToDisplay)
    //User need to be able to input a new number
    numberToDisplay = 0;    
}

//Listens for button click
const buttons = document.querySelectorAll('.number');
    buttons.forEach((button) => {
    button.addEventListener('click', () => {
        buttonClicked = button.innerHTML;
        //Check if button clicked is a number
        if(isNaN(buttonClicked)) {
            operator = convertButtonClickToOperator(buttonClicked)
            numberToDisplay = `${numberToDisplay} ${buttonClicked} `
            console.log(operator)
            updateDisplay(numberToDisplay)
        } else {
            //If button clicked is a number, update display correctly
            if(numberToDisplay == 0) {
                numberToDisplay = buttonClicked;
                updateDisplay(numberToDisplay)
            } else {
                    numberToDisplay = numberToDisplay+buttonClicked;
                    updateDisplay(numberToDisplay)
                }
                console.log(numberToDisplay)
        }
    });
});


