const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:

// 🚀 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
// Dica: use a função find.
// Linha 69 a 71 foram retirados do gabarito aula 8.2 - exercicio 1
function authorBornIn1947() {
  return books.find((book) => book.author.birthYear === 1947).author.name;
}


// 2 - Retorne o nome do livro de menor nome.
// Dica: use a função forEach.
// Linha 79 a 83 foram retirados do gabarito aula 8.2 - exercicio 2
function smallerName() {
  let nameBook;
  books.forEach((book) => {
    // '!nameBook' significa que ela será diferente de falso (isso porque a variável vazia retorna false e o oposto disso é true), então se vazia atribua o primeiro nome de livro que encontrar // ou verifique se o tamanho (comprimento) do titulo do próximo livro que encontrar é menor que o tamanho do titulo atual que foi armazenado
    if (!nameBook || book.name.length < nameBook.length) {
      nameBook = book.name;
    }
  });
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}


// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.
// Linha 93 foi retirado do gabarito aula 8.2 - exercicio 3
function getNamedBook() {
  return books.find((book) => book.name.length === 26);
}

// 4 - Ordene os livros por data de lançamento em ordem decrescente.
// Linha 98 foi retirado do gabarito aula 8.2 - exercicio 4
function booksOrderedByReleaseYearDesc() {
  return books.sort((bookA, bookB) => bookB.releaseYear - bookA.releaseYear);
}


// 🚀 5 - Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.
function everyoneWasBornOnSecXX() {
  return books.every((book) => book.author.birthYear > 1900 && book.author.birthYear <= 2000);
}


// 🚀 6 - Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.
function someBookWasReleaseOnThe80s() {
  return books.some((book) => book.releaseYear >= 1980 && book.releaseYear < 1990);
}


// 7 - Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.
function authorUnique() {
  return books.every((book) =>
  // aqui se books for falso
    !books.every((bookA, bookB) => bookA.author.birthYear === bookB.author.birthYear)
  );
}
