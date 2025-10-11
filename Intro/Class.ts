class Person {
  name?: string
  town?: string
  age?: number

  info(): void {
    console.log(`The name is ${this.name}, the town is ${this.town}, the age is ${this.age}`);
  }
}

const person = new Person();
person.name = "Ivan";
person.town = "Sofia";
person.age = 30;

person.info();