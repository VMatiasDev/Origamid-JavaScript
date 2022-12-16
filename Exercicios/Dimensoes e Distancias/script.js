// Verifique a distância da primeira imagem
// em relação ao topo da página

const firstImg = document.querySelector('img');
console.log(firstImg.offsetTop);

// Retorne a soma da largura de todas as imagens

function sumImgs() {
  const imgs = document.querySelectorAll('img');
  let sum = 0;
  imgs.forEach((item) => {
    sum += item.clientWidth;
  });
  console.log(sum);
}

window.onload = function () {
  sumImgs();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a');

links.forEach((item) => {
  const linkWidth = item.offsetWidth;
  const linkHeight = item.offsetHeight;
  if (linkWidth >= 48 && linkHeight >= 48) {
    console.log('Ideal para dedo');
  } else {
    console.log('Link pequeno');
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const mobile = window.matchMedia('(max-width: 720px)');

if (mobile.matches) {
  const menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile');
}
