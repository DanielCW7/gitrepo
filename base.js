// practice javascript

function Person(name, age, haircolor, voter) {
    this.name = name;
    this.age = age;
    this.haircolor = haircolor;
    this.voter = voter;
}


const person1 = new Person("Jim", 20, "blonde", true);
const person2 = new Person("jane", 30, "brown", true);
const person3 = new Person("billy", 14, "black", false);


Person.prototype.greeting = function() {
    return `Hello, ${this.name}!`
}
// greeting prototype did not work when it was an arrow function

console.log(person1.greeting())
console.log(person2.greeting())
console.log(person1, person2, person3)