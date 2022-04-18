let nota = 85;

if (nota >= 90){
    nota = "A";
    console.log(nota);
} else if (nota >= 80){
    nota = "B";
    console.log(nota);
} else if (nota >= 70){
    nota = "C";
    console.log(nota);
} else if (nota >= 60){
    nota = "D";
    console.log(nota);
} else if (nota >= 50){
    nota = "E";
    console.log(nota);
} else if (nota > 100 || nota < 0){
    console.log("Não foi possível converter a nota. Por favor, verifique se ela foi inserida corretamente.");
} else {
    nota = "F";
    console.log(nota);
}