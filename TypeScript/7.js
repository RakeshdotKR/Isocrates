var Labrador = /** @class */ (function () {
    function Labrador(name) {
        this.name = name;
    }
    Labrador.prototype.eat = function () {
        console.log("".concat(this.name, " is eating"));
    };
    Labrador.prototype.bark = function () {
        console.log("Dog is barking");
    };
    Labrador.prototype.makeSound = function () {
        this.bark();
    };
    return Labrador;
}());
var dog = new Labrador("Tommy");
dog.eat();
dog.bark();
dog.makeSound();
