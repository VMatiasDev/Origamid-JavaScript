// Duplique o menu e adicione ele em copy

const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');
const cloneMenu = menu.cloneNode(true);
copy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq

const firstDtFaq = document.querySelector('.faq-lista dt');

// Selecione o DD referente ao primeiro DT

const DdFromDt = firstDtFaq.nextElementSibling;

// Substitua o conteúdo html de .faq pelo de .animais

const faq = document.querySelector('.faq');
const animais = document.querySelector('.animais');

faq.innerHTML = animais.innerHTML;
