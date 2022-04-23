// const button = document.getElementById('add-button');
// const input = document.getElementById('phrases-input');
// const list = document.getElementById('phrases-list'); // Mostrará a array com as frases adicionadas pelo usuário

// function insertPhraseInDOM() {
//   const phrasesList = JSON.parse(localStorage.getItem('phrases'));
//   const listLength = phrasesList.length - 1;
//   const phraseText = phrasesList[listLength]; // aqui pegamos a array e indicamos o indice, a constante phrasesList nos pemite 
//   const phrase = document.createElement('li');
//   phrase.innerText = phraseText;
//   list.appendChild(phrase);
// }

// function addPhraseToLocalStorage() {
//   const oldList = JSON.parse(localStorage.getItem('phrases'));
//   const phraseText = input.value;
//   oldList.push(phraseText); // adiciona na array phrases que está aramazenada no local storage o valor que foi enviado ao apertar o botão
//   localStorage.setItem('phrases', JSON.stringify(oldList)); // atualiza a informação no armazenamento
//   insertPhraseInDOM(); // vai para a função onde será exibido na tela a informação
// }

// function initialRenderization() {
//   if (localStorage.getItem('phrases') === null) { // se não existe a array
//     localStorage.setItem('phrases', JSON.stringify([])); // então crie-a
//   } else { // se já existe, então...
//     const phrasesList = JSON.parse(localStorage.getItem('phrases'));
//     const listLength = phrasesList.length - 1;
//     for (let index = 0; index <= listLength; index += 1) { // como essa informação pode se manter depois de fechado, ele cria a lista assim que a página for aberta
//       const listElement = document.createElement('li');
//       listElement.innerText = phrasesList[index];
//       list.appendChild(listElement);
//     }
//   }
// }

// button.addEventListener('click', addPhraseToLocalStorage); // ao clicar no botão a função para armazenar a informação é iniciada

// window.onload = function() { // ao terminar de carregar a página a função chama as informações que estão armazenadas e exibe as que estão armazenadas
//   initialRenderization();
// };


const button = document.getElementById('add-button');
const input = document.getElementById('phrases-input');
const list = document.getElementById('phrases-list');

function insertPhraseInDOM() {
  const phrasesList = JSON.parse(sessionStorage.getItem('phrases'));
  const listLength = phrasesList.length - 1;
  const phraseText = phrasesList[listLength];
  const phrase = document.createElement('li');
  phrase.innerText = phraseText;
  list.appendChild(phrase);
}

function addPhraseToSessionStorage() {
  if (sessionStorage.getItem('phrases') === null) {
    sessionStorage.setItem('phrases', JSON.stringify([]));
  }
  const oldList = JSON.parse(sessionStorage.getItem('phrases'));
  const phraseText = input.value;
  oldList.push(phraseText);
  sessionStorage.setItem('phrases', JSON.stringify(oldList));
  insertPhraseInDOM();
}

button.addEventListener('click', addPhraseToSessionStorage);