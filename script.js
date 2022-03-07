const digits = document.querySelectorAll('.digits button');
const operator = document.querySelectorAll('.operators button');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const decimal = document.querySelector('.decimal');
const output = document.querySelector('.output');
const clearEntry = document.querySelector('.CE');

let operatorNum = 0;
let decimalClicked = false;
let decimalNumber = false;
let equaled = false;
let operatorChecked = false;

let input = {
    digit: [...''],
    operator: [...''],
    sum: []
};

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

const sum = function() {
    if (!equaled) {
    if (operatorNum < 2) {
        input.sum = operate(input.operator[0], parseFloat(input.digit[0]), parseFloat(input.digit[1]));
    } else {
        input.sum = operate(input.operator[operatorNum - 1], input.sum, parseFloat(input.digit[operatorNum]));
    };
    input.sum = Math.round(input.sum * 10) / 10;
    decimalClicked = false;
    decimalNumber = false;
    operatorChecked = false;
    return input.sum;
};
};

const equate = function() {
    if (typeof input.digit[1] === 'undefined') {
        return;
    };
    input.sum = sum();
    output.textContent = input.sum;
    equaled = true;
    return input.sum;
};

const digitInput = function(variable) {
    if (decimalClicked && decimalNumber) {
        input.digit[operatorNum] += `${variable.textContent}`;
        input.digit[operatorNum] = input.digit[operatorNum].split("undefined").pop();
        output.textContent = input.digit[operatorNum];
        decimalNumber = false;
        operatorChecked = false;
        equaled = false;
        } else if (!decimalNumber && decimalClicked) {
            return;
        } else {
        input.digit[operatorNum] += `${variable.textContent}`;
        input.digit[operatorNum] = input.digit[operatorNum].split("undefined").pop();
        output.textContent = input.digit[operatorNum];
        equaled = false;
        operatorChecked = false;
}};

const operatorInput = function(variable) {
    if (!operatorChecked) {
    input.operator[operatorNum] += `${variable.textContent}`;
    input.operator[operatorNum] = input.operator[operatorNum].split("undefined").pop();
    sum();
    (operatorNum > 0) ? output.textContent = input.sum : false;
    operatorNum++;
    operatorChecked = true;
    };
};

const addDecimal = function() {
    if (!decimalClicked) {
        input.digit[operatorNum] += `.`;
        output.textContent = input.digit[operatorNum];
        decimalClicked = true;
        decimalNumber = true;
        } else {return};
};

const CE = function() {
    if (input.digit[operatorNum]) {
    input.digit[operatorNum] = input.digit[operatorNum].slice(0, -1);
    input.digit[operatorNum] = input.digit[operatorNum].split("undefined").pop();
    output.textContent = input.digit[operatorNum];
    } else {return;};
};

const reset = function() {
    output.textContent = 0;
    operatorNum = 0;
    input.digit = [...''];
    input.operator = [...''];
    input.sum = [];
    decimalClicked = false;
    decimalNumber = false;
    equaled = false;
    operatorChecked = false;
};


digits.forEach((button) => {
    button.addEventListener('click', () => {{
        digitInput(button);
        }
})
});

operator.forEach((button) => {
    button.addEventListener('click', () => {
        operatorInput(button);
    });
});

decimal.addEventListener('click', () => {
    addDecimal();
});

equals.addEventListener('click', () => {
    equate();
});

clear.addEventListener('click', () => {
    reset();
});

clearEntry.addEventListener('click', () => {
    CE();
});

window.addEventListener('keydown', function(e) {    
    const key = document.querySelector(`button[data-key="${e.keyCode}"]`);
    if (!key) {
        return;
    } else if (key.parentElement.classList.contains('digits')) {
        digitInput(key);
    } else if (key.parentElement.classList.contains('operators')) {
        operatorInput(key);
    } else if (key.classList.contains('equals')) {
        equate();
    } else if (key.classList.contains('decimal')) {
        addDecimal();
    } else if (key.classList.contains('CE')) {
        CE();
    } else if (key.classList.contains('clear')) {
        reset();
    };
});