
function indiceDoMenorValor(array){
    indice = 0;
    menorValor = 999999999999;
    for(let index = 0; index < array.length; index += 1){
        if (array[index] < menorValor){
            indice = index;
            menorValor = array[index];
        }
    }
    return indice;
}

console.log(indiceDoMenorValor(array = [2, 4, 6, 7, 10, 0, -3]));
// console.log(menorValor);