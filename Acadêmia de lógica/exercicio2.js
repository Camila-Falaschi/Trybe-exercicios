let menu = ["Não temos esta opção ainda :(", "1 - Trybe Lanche Feliz", "2 - McTrybe", "3 - TrybeWooper", "4 - X-Trybe"];

let pedido = 10;

switch (pedido){
    case 1:
        console.log(menu[1]);
        break;
    
    case 2:
        console.log(menu[2]);
        break;

    case 3:
        console.log(menu[3]);
        break;

    case 4:
        console.log(menu[4]);
        break;

    default:
        console.log(menu[0]);
}