// Retorne no console todas as imagens do site
const allImg = document.querySelectorAll('img');
console.log(allImg);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const someImg = document.querySelectorAll('img[src^="img/imagem"]');
console.log(someImg);

// Selecione todos os links internos (onde o href começa com #)
const internalLinks = document.querySelectorAll('[href^="#"]');
console.log(internalLinks);

// Selecione o primeiro h2 dentro de .animais-descricao
const firstAnimaisDescricao = document.querySelector('.animais-descricao');
const firstH2 = firstAnimaisDescricao.querySelector('h2');

// const firstH2 = document.querySelector('.animais-descricao h2') - Também é válido

console.log(firstH2);

// Selecione o último p do site
const allP = document.querySelectorAll('p');
// const lastP = allP[allP.length - 1];
console.log(allP[allP.length - 1]);
