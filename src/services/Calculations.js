const calculations = (calcData) => {
    const { num1, num2, sign } = calcData
    let sum;
    switch (sign) {
        case "+":
            return sum = num1 + num2;
        case "-":
            return sum = num1 - num2;
        case "/":
            return sum = num1 / num2;
        case "*":
            return sum = num1 * num2;
        default:
            throw new TypeError("No operator detected");
    }
}

const percent = (number) => {
    return (number * 0.01)
}

export { calculations, percent }