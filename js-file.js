numberToDisplay = 0

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

const buttons = document.querySelectorAll('.button');
    buttons.forEach((button) => {
    button.addEventListener('click', () => {
        buttonClicked = button.innerHTML;
        if(isNaN(buttonClicked)) {
            console.log("Inget jävla nr")
        } else {
            if(numberToDisplay == 0) {
                numberToDisplay = buttonClicked;
            } else {
                    numberToDisplay = numberToDisplay+buttonClicked;
                }
                console.log(numberToDisplay)
        }
    });
});

