let unknown: unknown = 'hello world';
console.log((unknown as string).toUpperCase());

let unknownTwo: unknown = 'hello world';
console.log((<string> unknownTwo).toUpperCase());