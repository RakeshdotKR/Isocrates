let counter: number = 5;
let isActive: boolean = true;

//Array
let ArrayName: string[] = ['Rakesh', 'Manoj','Mahesh'];

//Object
let person:{
    name:string;
    age:number;
};
person = {
    name:'Bipin',
    age:5
};
//let names:string = 'Suresh';
let greeting : (names:string) => string;
greeting = function(names: string){
    //console.log('Hi '+names);
    return `Hi ${names}`
};
console.log(greeting("Ramesh"));
