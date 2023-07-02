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

console.log(person1)