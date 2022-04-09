let array = ['java', 'javascript', 'python', 'html', 'css'];

let smallestWord = array[0];
let biggestWord = '';

for (let index = 0; index < array.length; index += 1){
    if (smallestWord.length > array[index].length){
        smallestWord = array[index];
    }

    if (biggestWord.length < array[index].length){
        biggestWord = array[index];
    }
}

console.log(smallestWord);
console.log(biggestWord);