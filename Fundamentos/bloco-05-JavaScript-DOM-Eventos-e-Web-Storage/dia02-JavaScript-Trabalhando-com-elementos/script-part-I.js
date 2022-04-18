let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
        
let pai = elementoOndeVoceEsta.parentElement;
pai.style.color = 'blue';

let primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = 'Olá como vai?'

let primeiroFilho = pai.firstElementChild;

let primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;

let textoAtencao = elementoOndeVoceEsta.nextSibling;

let terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

let terceiroFilho2 = pai.lastElementChild.previousElementSibling;