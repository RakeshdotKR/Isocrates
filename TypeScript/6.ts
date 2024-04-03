//OOP: class

class Person{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old`);
    }
}
let person1 = new Person('Rakesh',35);
person1.greet();

//Access modifiers
class Employee{
    private salary: number;
    readonly hikePercentage: number = 0.15;

    constructor(){
        this.salary = 20000;
    }

    hike(): number{
        this.salary = this.salary + this.salary*this.hikePercentage;  //10%
        return this.salary;
    }

    getSalary(): number{
        return this.salary;
    }

    setSalary(amount: number):void{
        this.salary = amount;
    }
}
class Bi extends Employee{
    bonus(){
        console.log("I got yearly bonus");
    }
}
let harshitha = new Employee();
harshitha.setSalary(50000);
console.log(harshitha.getSalary());
console.log(harshitha.hike());

let hemanth = new Bi();
hemanth.setSalary(100000);
console.log(hemanth.getSalary());
console.log(hemanth.hike());
console.log(hemanth.bonus());

//Abstract classes
abstract class CompanyLaws{
    abstract salaryDate(): void;
}
class Company extends CompanyLaws{
    salaryDate(){
        console.log('Salary date is 5th of every month');
    }
}
let isocrates = new Company();
isocrates.salaryDate();
