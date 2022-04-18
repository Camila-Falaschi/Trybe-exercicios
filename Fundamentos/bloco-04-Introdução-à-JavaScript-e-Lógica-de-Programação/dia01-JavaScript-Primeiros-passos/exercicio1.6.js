let peca = "Pião";

switch (peca.toLowerCase()) {  // fonte: https://www.w3schools.com/jsref/jsref_tolowercase.asp
    case "rei":
        console.log("A peça do rei se move uma casa por vez em qualquer direção, contanto que não seja atacado por uma peça inimiga. Ademais, ele possui um movimento especial que consiste no movimento de duas casas em direção a uma torre aliada e a peça torre se move para a casa que o rei passou(com a condição que ambas peças ainda não tenham sido movidas).");
        break;

    case "rainha":
        console.log("A paçe da rainha se move na diagonal, horizontal, ou vertical sem limite de número de casa. Entretanto não são capazes de pular outras peças.");
        break;

    case "torre":
        console.log("A peça torre move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser. Porém não podem pular peças.");
        break;

    case "bispo":
        console.log("A peça bispo move-se na diagonal, quantas casas quiser. O Bispo que iniciar a partida em uma casa branca somente poderá transitar pelas brancas, enquanto o Bispo que inicia em uma casa preta somente poderá transitar pelas casas pretas.");
        break;
    
    case "cavalo":
        console.log("A peça cavalo se move “em L”. Ele pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante. São as únicas que podem pular outras peças.");
        break;

    case "peão":
        console.log("A peça peão move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas. O peão é a única peça que não pode retroceder, e também a única que efetua a captura com um movimento diferente do utilizado para avançar no tabuleiro. O peão pode capturar as peças que estejam uma fileira acima, mas nas colunas adjacentes a sua. Quando um peão alcança a última casa do tabuleiro ele pode ser substituído por qualquer outra peça à escolha do jogador com exceção do rei.");
        break;
    
    default:
        console.log("Não foi possível identificar a peça. Verifique se foi escrita corretamente ou troque o nome por outro similar (exemplo: de 'dama' para 'rainha').");
}


/* Fontes:
https://www.soxadrez.com.br/conteudos/movimentos/
https://www.ichess.net/blog/chess-pieces-moves/
*/