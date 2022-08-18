const sumAll = function(num1, num2) {
    let currentValue;
    let min;
    let sum = 0;
    if(num1 < 0 || num2 < 0 || (typeof num1 !== "number") ||(typeof num2 !== "number") ) {
        return "ERROR";
    }
    if(num1 > num2) {
        currentValue = num1;
        min = num2;
    }
    else {
        currentValue = num2;
        min = num1;
    }

    while(currentValue >= min) {
        sum += currentValue;
        currentValue--
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
