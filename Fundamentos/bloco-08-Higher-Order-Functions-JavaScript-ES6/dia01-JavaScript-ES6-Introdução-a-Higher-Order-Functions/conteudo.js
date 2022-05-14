// const repeat = (number, action) => {
//     for (let count = 0; count <= number; count += 1) {
//       action(count);
//     }
//   };
  
//   repeat(5, console.log);


  // ---------------------------------------------------------------------------

//   const repeat = (number, action) => {
//     for (let count = 0; count <= number; count += 1) {
//       action(count);
//     }
//   };
  
//   repeat(30, (number) => {
//     if (number % 2 === 0) {
//       console.log(number, 'is even');
//     //   console.log(`The ${number}, is even`);
//     }
//   });

  // ---------------------------------------------------------------------------

//   const repeat = (number, action) => {
//     for (let count = 0; count <= number; count += 1) {
//       action(count);
//     }
//   };
  
//   const isEven = (number) => {
//     if (number % 2 === 0) {
//       console.log(number, 'is even');
//     }
//   };
  
//   const isOdd = (number) => {
//     if ((number % 2) > 0) {
//       console.log(number, 'is odd');
//     }
//   };
  
//   repeat(3, isEven); // Testa quais números serão pares;
//   repeat(3, isOdd); // Testa quais números serão ímpares;

  // ---------------------------------------------------------------------------

const wakeUp = () => 'Acordado!!';
const breakfast = () => 'Bora tomar café!!';
const sleep = () => 'Partiu Dormir!!';

const doingThings = (func) => console.log(func());
// para não precisar colocar os parentêses em todos os casos, colocamos ele na função principal como um callback

// Ao chamar a função doingThings:
doingThings(wakeUp);
// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!
doingThings(breakfast);
doingThings(sleep);
