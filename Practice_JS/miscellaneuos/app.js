class Mammal { //base class / parent class
    constructor(name) {
        this.name = name;
        this.type = "warm-blooded";
    }

    eat() {
        console.log("I am eating");
    }
}

class Dog extends Mammal { //child class
    constructor(name) {
        super(name); //parent class is called
    }

    bark() {
        console.log("boh boh...");
    }

    eat() {
        console.log("overriding function of parent class");
    }
}

class Cat extends Mammal {  //child class
    constructor(name) {
        super(name); //parent class is called
    }

    meow() {
        console.log("meaaooowww...");
    }
}