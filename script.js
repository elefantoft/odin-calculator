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
