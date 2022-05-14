// Exercício 1 ---------

// const employee = (name) => {
//   return {
//     nameCompleto: name,
//     email: `${name.replace(' ', '.').toLowerCase()}@tybe.com`,
//   }
// }

// const newEmployees = (callback) => {
//     const employees = {
//       id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//       id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//       id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//     }
//     return employees;
//   };

// console.log(newEmployees(employee));


  // ---------------------------------------------------------------------------


// Exercício 2 ---------

// const compareNumbers = (choosedNumber, drawNumber) => (choosedNumber === drawNumber)? `Parabéns você ganhou` : `Tente novamente`;

// const lottery = (choosedNumber) => {
//   const drawNumber = Math.floor(Math.random() * 5) + 1;
//   return compareNumbers(choosedNumber, drawNumber);
// };

// console.log(lottery(5));


// Outra maneira seria:
// const numberChecker = (myNumber, number) => myNumber === number;

// const lotteryResult = (myNumber, callback) => {
//   const number = Math.floor((Math.random() * 5) + 1);
//   return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
// };

// console.log(lotteryResult(2, numberChecker));


  // ---------------------------------------------------------------------------


// Exercício 3 ---------

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (correctAnswers, studentAnswers) => {
    if (correctAnswers === studentAnswers) {
      return 1;
    }
    if (studentAnswers === 'N.A') {
      return 0;
    }
  return -0.5;
}

const countingPoints = (correctAnswers, studentAnswers, action) => {
  let grade = 0;
  for (let index = 0; index < correctAnswers.length; index += 1) {
    // aqui a seguir 'action' corresponde à função declarada no console.log
    const counter = action(correctAnswers[index], studentAnswers[index]);
    grade += counter;
  }
  return `A nota final do aluno é: ${grade} pontos`;
};

console.log(countingPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));
