let number = 10;
let factorialresult = 1;

for (let index = 1; index <= number; index +=1){
    factorialresult = factorialresult * index;
    // console.log(factorialresult);
}

console.log("O fatorial de " + number + " é " + factorialresult);