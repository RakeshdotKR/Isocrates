//OOP: class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("Hi, my name is ".concat(this.name, " and I'm ").concat(this.age, " years old"));
    };
    return Person;
}());
var person1 = new Person('Rakesh', 35);
person1.greet();
//Access modifiers
var Employee = /** @class */ (function () {
    function Employee() {
        this.hikePercentage = 0.15;
        this.salary = 20000;
    }
    Employee.prototype.hike = function () {
        this.salary = this.salary + this.salary * this.hikePercentage; //10%
        return this.salary;
    };
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    Employee.prototype.setSalary = function (amount) {
        this.salary = amount;
    };
    return Employee;
}());
var Bi = /** @class */ (function (_super) {
    __extends(Bi, _super);
    function Bi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bi.prototype.bonus = function () {
        console.log("I got yearly bonus");
    };
    return Bi;
}(Employee));
var harshitha = new Employee();
harshitha.setSalary(50000);
console.log(harshitha.getSalary());
console.log(harshitha.hike());
var hemanth = new Bi();
hemanth.setSalary(100000);
console.log(hemanth.getSalary());
console.log(hemanth.hike());
console.log(hemanth.bonus());
//Abstract classes
var CompanyLaws = /** @class */ (function () {
    function CompanyLaws() {
    }
    return CompanyLaws;
}());
var Company = /** @class */ (function (_super) {
    __extends(Company, _super);
    function Company() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Company.prototype.salaryDate = function () {
        console.log('Salary date is 5th of every month');
    };
    return Company;
}(CompanyLaws));
var isocrates = new Company();
isocrates.salaryDate();
