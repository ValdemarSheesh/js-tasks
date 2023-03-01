function calculate(a, b, operator) {
    let result = 0;
    a = parseBigNumber(a);
    b = parseBigNumber(b);
    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;
        default:
            result = a;
    }
    result = result.toString();
    return result;
}

function parseBigNumber(a) {
    if (typeof a === 'string') {
        return BigInt(a);
    }
    return a;
}

console.log(calculate('10', '20', '+'));
