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

operator(5,2,subtract)
console.log(answer)