// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const internalLinks = document.querySelectorAll('a[href^="#"');

internalLinks.forEach((link) => {
  link.addEventListener('click', handleClick);
});

function handleClick(event) {
  event.preventDefault();
  internalLinks.forEach((link) => {
    link.classList.remove('ativo');
  });
  this.classList.add('ativo');
}

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const allElements = document.body.querySelectorAll('*');

allElements.forEach((element) => {
  element.addEventListener('click', whatIsClicked);
});

function whatIsClicked(event) {
  console.log(event.currentTarget);
}

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

const secondAllElements = document.body.querySelectorAll('*');

secondAllElements.forEach((element) => {
  element.addEventListener('click', secondWhatIsClicked);
});

function secondWhatIsClicked(event) {
  event.target.remove(event);
}

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

window.addEventListener('keydown', handleKeyboard);

function handleKeyboard(event) {
  if (event.key === 't') {
    document.documentElement.classList.toggle('biggerText');
  }
}
