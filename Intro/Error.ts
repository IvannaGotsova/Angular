function divide(firstNumber: number, seccondNumber: number): number {
  if (seccondNumber === 0) {
    throw new Error('Division by zero');
  }
  return firstNumber / seccondNumber;
}

try {
  const result = divide(4, 0);
  console.log(result);
} catch (error) {
  console.error('An error because of division by zero');
}