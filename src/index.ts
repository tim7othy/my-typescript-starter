interface IAnimal {
    name: string;
    age: number;
}

class Dog implements IAnimal {
    public name: string = "dog";
    public age: number = 12;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

let d = new Dog("D", 12);
console.log("name: " + d.name);
console.log("age: " + d.age);
