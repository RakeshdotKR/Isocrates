var counter = 5;
var isActive = true;
//Array
var ArrayName = ['Rakesh', 'Manoj', 'Mahesh'];
//Object
var person;
person = {
    name: 'Bipin',
    age: 5
};
//let names:string = 'Suresh';
var greeting;
greeting = function (names) {
    console.log('Hi ' + names);
    return "Hi ".concat(names);
};
console.log(greeting("Ramesh"));
