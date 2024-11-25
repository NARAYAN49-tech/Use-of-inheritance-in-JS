

class Person {
    constructor(name, age) {
        console.log("Person class constructor");
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hi, I am ${this.name}`);
    }
}


class Student extends Person{
    constructor(name, age, marks) {
        console.log("Student class Constructor");
        super(name, age);  //Parent class constructor is being called
        this.marks = marks;
    }
   
}

class Teacher extends Person{
    constructor(name, age, subject) {
        console.log("teacher class constructor");
        super(name, age);
        this.subject = subject;
    }

}









class Mammal {
    constructor(name) {
        this.name = name;
        this.type = "Warm-Blooded";
    }

    eat() {
        console.log("I am eating");
    }   
}
class Dog extends Mammal{
    constructor(name) {
        super(name);
    }

    bark() {
        console.log("Woof");
    }
}
class Cat extends Mammal{
    constructor(name){
        super(name);
    }
    meow() {
        console.log("Meow");
    }
}
