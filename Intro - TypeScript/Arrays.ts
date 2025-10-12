const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.push(10)
numbers.push(11)
numbers.push(12)
numbers.push(13)

for (let index = 0; index < numbers.length; index++) {
    const number = numbers[index];
    console.log(number)
}