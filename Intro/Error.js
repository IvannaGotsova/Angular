function divide(firstNumber, seccondNumber) {
    if (seccondNumber === 0) {
        throw new Error('Division by zero');
    }
    return firstNumber / seccondNumber;
}
try {
    var result = divide(4, 0);
    console.log(result);
}
catch (error) {
    console.error('An error because of division by zero');
}
