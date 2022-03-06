const digits = document.querySelectorAll('.digits button');
const operator = document.querySelectorAll('.operators button');
const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');
const decimal = document.querySelector('#decimal');
const output = document.querySelector('.output');
let operatorNum = 0;
let decimalClicked = false;

const add = function(...theArgs) {
    let sum = theArgs[0];
    for (let i = 1; i < theArgs.length; i++) {
        sum += theArgs[i];
    };
    return sum;
};

const subtract = function(...theArgs) {
    let sum = theArgs[0];
    for (let i = 1; i < theArgs.length; i++) {
        sum -= theArgs[i];
    };
    return sum;
};

const multiply = function(...theArgs) {
    let sum = theArgs[0];
    for (let i = 1; i < theArgs.length; i++) {
        sum *= theArgs[i];
    };
    return sum;
};

const divide = function(...theArgs) {
    let sum = theArgs[0];
    for (let i = 1; i < theArgs.length; i++) {
        sum /= theArgs[i];
    };
    return sum;
};

const operate = function(a, b, c) {
    if (a === '+') {
        return add(b, c);
    } else if (a === '-') {
        return subtract(b ,c);
    } else if (a === '*') {
        return multiply(b, c);
    } else if (a === '/') {
        if (c === 0) {
            alert("You can't divide by 0 you lunatic!");
        } else {
            return divide(b, c);
        };
    };
};

let input = {
    digit: [...''],
    operator: [...''],
    sum: []
};

digits.forEach((button) => {
        button.addEventListener('click', () => {{
           input.digit[operatorNum] += `${button.textContent}`;
           input.digit[operatorNum] = input.digit[operatorNum].split("undefined").pop();
           output.textContent = input.digit[operatorNum];
        }
})
});

decimal.addEventListener('click', () => {
    if (!decimalClicked) {
    input.digit[operatorNum] += `.`;
    output.textContent = input.digit[operatorNum];
    decimalClicked = true;
    } else {return};
});

operator.forEach((button) => {
    button.addEventListener('click', () => {
        input.operator[operatorNum] += `${button.textContent}`;
        input.operator[operatorNum] = input.operator[operatorNum].split("undefined").pop();
        sum();
        (operatorNum > 0) ? output.textContent = input.sum : false;
        operatorNum++;
    });
});

let sum = function() {
    if (operatorNum < 2) {
        input.sum = operate(input.operator[0], parseInt(input.digit[0]), parseInt(input.digit[1]));
    } else {
        input.sum = operate(input.operator[operatorNum - 1], input.sum, parseInt(input.digit[operatorNum]));
    };
    input.sum = Math.round(input.sum * 10) / 10;
    decimalClicked = false;
    return input.sum;
};

equals.addEventListener('click', () => {
    if (typeof input.digit[1] === 'undefined') {
        return;
    };
    input.sum = sum();
    output.textContent = input.sum;
    return input.sum;
});

clear.addEventListener('click', () => {
    output.textContent = 0;
    operatorNum = 0;
    input.digit = [...''];
    input.operator = [...''];
    input.sum = [];
});