// Adicione a classe ativo a todos os itens do menu

const menu = document.querySelector('.menu > ul');
const menuLi = menu.children;
const liArray = Array.from(menuLi);
liArray.forEach((item) => item.setAttribute('class', 'ativo'));

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

liArray.forEach((item, index) => {
  if (index != 0) {
    item.removeAttribute('class');
  }
});

// Verifique se as imagens possuem o atributo alt

const imgs = document.querySelectorAll('img');
imgs.forEach((item) => {
  const hasAlt = item.hasAttribute('alt');
  console.log(hasAlt);
});

// Modifique o href do link externo no menu

const externalLinkMenu = menu.lastElementChild.firstElementChild;
externalLinkMenu.setAttribute('href', 'https://github.com/VMatiasDev');
