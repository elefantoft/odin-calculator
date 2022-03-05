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
        return divide(b, c);
    };
};

let input = {
    digit: [...''],
    operator: [...'']
};

const digits = document.querySelectorAll('.digits button');
const operator = document.querySelectorAll('.operators button');
const buttons = document.querySelectorAll('button');
const equals = document.querySelector('#equals');
const output = document.querySelector('.output');
const clear = document.querySelector('#clear');

let operatorNum = 0;

digits.forEach((button) => {
        button.addEventListener('click', () => {{
           input.digit[operatorNum] += `${button.textContent}`;
           input.digit[operatorNum] = input.digit[operatorNum].split("undefined").pop();
        }
})
});

operator.forEach((button) => {
    button.addEventListener('click', () => {
        input.operator[operatorNum] += `${button.textContent}`;
        input.operator[operatorNum] = input.operator[operatorNum].split("undefined").pop();
        operatorNum++;
    });
});

buttons.forEach((button) => {
    button.addEventListener('click', () => {
       output.textContent = button.textContent;
    });
});

equals.addEventListener('click', () => {
    output.textContent = operate(input.operator[0], parseInt(input.digit[0]), parseInt(input.digit[1]));
});

clear.addEventListener('click', () => {
    output.textContent = 0;
    operatorNum = 0;
    input.digit = [...''];
    input.operator = [...''];
});