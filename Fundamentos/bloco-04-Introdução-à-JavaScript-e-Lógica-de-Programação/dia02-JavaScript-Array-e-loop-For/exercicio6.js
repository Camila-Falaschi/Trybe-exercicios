let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let numbers = [70, 8, 100, 2, 12];

let oddQuantity = 0;

for(let index = 0; index < numbers.length; index += 1){
    if (numbers[index] % 2 !== 0){
        oddQuantity += 1;
    }
}

if(oddQuantity === 0){
    console.log('nenhum valor ímpar encontrado');
} else {
    console.log(oddQuantity);
}