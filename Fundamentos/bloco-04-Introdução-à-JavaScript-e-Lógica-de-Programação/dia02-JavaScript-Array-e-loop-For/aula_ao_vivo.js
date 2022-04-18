// let jogoDaCamila = [10, 52, 36, 35, 47, 2];

// let numerosMega = [5, 31, 60, 47, 14, 21];
// // let numerosMega = [10, 52, 36, 35, 47, 2];

// let acertos = 0;

// for(let index = 0; index < jogoDaCamila.length; index += 1){
//     for(let index2 =0; index2 < numerosMega.length; index2 += 1){
//         if(jogoDaCamila[index] === numerosMega[index2]){
//             acertos += 1;
//         }
//     }
// }

// if(acertos == 6){
//     console.log('Parabéns! Camila você ganhou na Mega! Hora de comemorar! ;D');
//     console.log('Você acertou: ' + acertos + 'número(s)');
// } else {
//     console.log('Camila, você apenas acertou: ' + acertos + ' número(s). Infelizmente você não ganhou na Mega. :(');
// }





let jogoDaCamila = [10, 52, 36, 35, 47, 2];

let randomNumber;

let numerosMega = [];

for(let index = 0; index < 6; index += 1){
    randomNumber = Math.floor((Math.random() * 60) + 1);
    if (numerosMega.length !== 6){
        for(let index2 = 0; index2 < numerosMega.length; index2 += 1){
            // if(randomNumber !== numerosMega[index2] && randomNumber !== 0){
                numerosMega.push(randomNumber);
            // }
        }
    }
}


let acertos = 0;

for(let index = 0; index < jogoDaCamila.length; index += 1){
    for(let index2 = 0; index2 < numerosMega.length; index2 += 1){
        if(jogoDaCamila[index] === numerosMega[index2]){
            acertos += 1;
        }
    }
}

console.log(numerosMega);

if(acertos == 6){
    console.log('Parabéns! Camila você ganhou na Mega! Hora de comemorar! ;D');
    console.log('Você acertou: ' + acertos + 'número(s)');
} else {
    console.log('Camila, você apenas acertou: ' + acertos + ' número(s). Infelizmente você não ganhou na Mega. :(');
}
