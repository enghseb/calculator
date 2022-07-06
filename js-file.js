numberToDisplay = 0

const equalButton = document.getElementById('equal')



equalButton.addEventListener('click', test)

function test(){
    console.log("DU tryckte på =")
}

function operator(num, num2, operator){
    answer = operator(num, num2)
    return answer
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

/* operator(5,2,subtract)
console.log(answer) */

function updateDisplay(numberToDisplay) {
    const displayDiv = document.getElementById('text');
    displayDiv.textContent = numberToDisplay
}

function convertButtonClickToOperator(buttonClicked) {
    /*Checks what operation should be done by what button was pressed */
    const operatorConversionTable = 
    {"multiply": "x",
    "divide": "÷", 
    "add": "+",
    "subtract": "-",
    "clear": "Clear",
}
    //Finds key from conversion table by looking at button clicked
    const operator = Object.keys(operatorConversionTable).find(key => 
        operatorConversionTable[key].includes(buttonClicked));
    return operator;
}

convertButtonClickToOperator()

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

