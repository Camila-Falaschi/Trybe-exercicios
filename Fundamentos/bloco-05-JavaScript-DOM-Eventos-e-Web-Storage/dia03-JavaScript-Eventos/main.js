const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
// Por causa da classe CSS aplicada nele.

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
function addClassWhenClicked(event) { // foi consultado o gabarito de rspostas para a criação dessa função
    let techElement = document.querySelector('.tech'); // aqui chamo todos os elementos com a classe 'tech'
    techElement.classList.remove('tech'); // aqui estou removendo a classe 'tech' de todos elementos encontrados na linha anterior // .classList acessa as classes listadas no elemento (https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList)
    event.target.classList.add('tech'); // aqui informo o que acontecerá nesse evento, no caso será adicionado a classe 'tech' para todos a quem o evento for atribuido. // .target é usada para implementar o evento (https://developer.mozilla.org/pt-BR/docs/Web/API/Event/target)
    // com os comandos acima teremos apenas o bloco que foi clicado em destaque, permitindo assim mais interatividade
    input.value = ''; // input permite a troca do valor no elemento, que no caso será o formato de texto (https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event) (https://www.w3schools.com/jsref/event_oninput.asp)  // assim, quando clicar no bloco e digitar algo na caixa de texto, a string será adicionada no bloco selecionado // as aspas estão vazias, pois receberá os caracteres durante o input do usuário // aqui estamos limpando o input, assim ele se atualizará com um novo input se selecionado novamente e outro texto seja enviado
}
firstLi.addEventListener('click', addClassWhenClicked);
secondLi.addEventListener('click', addClassWhenClicked);
thirdLi.addEventListener('click', addClassWhenClicked);


// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
// a resposta foi criada com a consulta no gabarito de respostas
input.addEventListener('input', function(event) { // o primeiro input da linha é a variável criada no inicio desse documento, onde selecionamos o elemento com o id 'input' // o segundo se refere ao evento, e quando o elemento receber o input do usuário ele executará a função // a função foi criada dentro dos parênteses, porém também poderia ter sido criada fora, a diferença seria que necessitariamos nomear a função
    let techElement = document.querySelector('.tech'); // seleciono o elemento que recebe a classe 'tech'
    techElement.innerText = event.target.value; // e informo que o seu texto interno irá alterar nesse evento
});

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?
myWebpage.addEventListener('dblclick', function() { 
    // a resposta foi criada com a consulta no gabarito de respostas
    window.location.replace('https://camila-falaschi.github.io/'); // window.location.replace permite trocar a exibição da página web por outra informada (https://developer.mozilla.org/pt-BR/docs/Web/API/Window/location) (https://developer.mozilla.org/pt-BR/docs/Web/API/Window) (https://developer.mozilla.org/en-US/docs/Web/API/Location/replace)
});

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
// a resposta foi criada com a consulta no gabarito de respostas
myWebpage.addEventListener('mouseover', function(event){
    event.target.style.color = 'red'; // estamos colocando o parâmetro para função dessa vez pois são dois eventos que ocorrerão, 1 quando o mouse estiver em cima do texto e o outro quando sair // aqui '.innerText' não é necessário, apenas o target para podermos implementar o evento (https://developer.mozilla.org/en-US/docs/Web/API/Event/target)
});
myWebpage.addEventListener('mouseout', function(event){
    event.target.style.color = 'unset'; // unset retorna a cor do text para o seu valor inicial
});


// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.