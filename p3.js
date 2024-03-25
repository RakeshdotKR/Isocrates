//Modules
//Single entity import
// const people = require('./people');
// console.log(people);
//Multiple imports
const data = require('./people');
//console.log(data.people,data.ages);
//Multiple imports 2
const {people,ages} = require('./people');
// console.log(people);
// console.log(ages);

const os = require('os');
console.log(os.platform());
console.log(os.homedir());