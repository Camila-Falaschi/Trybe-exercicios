const angulo1 = -45;
const angulo2 = 45;
const angulo3 = 90;

let sumAngulos = angulo1 + angulo2 + angulo3;

if (sumAngulos == 180){
    console.log(true);
} else if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0){
    console.log("Um ou mais ângulos estão com valores inválidos.");
} else {
    console.log(false);
}