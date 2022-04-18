
function indiceDoMaiorValor(array){
    indice = 0;
    maiorValor = 0;
    for(let index = 0; index < array.length; index += 1){
        if (array[index] > maiorValor){
            indice = index;
            maiorValor = array[index];
        }
    }
    return indice;
}

console.log(indiceDoMaiorValor(array = [2, 3, 6, 7, 10, 1]));
// console.log(maiorValor);