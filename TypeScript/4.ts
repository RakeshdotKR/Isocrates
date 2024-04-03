//Type Inference
function add(a,b){
    return a+b;
}
console.log(add(20,30));

const numbers = [10,20,30,40];
numbers.push(50);

numbers.forEach(num=>console.log(num*3));

function stringUppercase(str: string): void{
    console.log(str.toUpperCase());
}

stringUppercase("isocrates");
