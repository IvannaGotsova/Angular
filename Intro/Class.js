var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.info = function () {
        console.log("The name is ".concat(this.name, ", the town is ").concat(this.town, ", the age is ").concat(this.age));
    };
    return Person;
}());
var person = new Person();
person.name = "Ivan";
person.town = "Sofia";
person.age = 30;
person.info();
