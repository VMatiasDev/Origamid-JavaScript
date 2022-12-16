// Adicione a classe ativo a todos os itens do menu

const menu = document.querySelectorAll('.menu a');
menu.forEach((item) => item.classList.add('ativo'));

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

menu.forEach((item, index) => {
  if (index != 0) {
    item.classList.remove('ativo');
  }
});

// Verifique se as imagens possuem o atributo alt

const imgs = document.querySelectorAll('img');
imgs.forEach((item) => {
  const hasAlt = item.hasAttribute('alt');
  console.log(hasAlt);
});

// Modifique o href do link externo no menu

const externalLinkMenu = menu[menu.length - 1];
externalLinkMenu.setAttribute('href', 'https://github.com/VMatiasDev');
