// onScroll = variável criada
// scrollY = eixo Y do rolamento
// scroll = classe crianda no css e sendo adicionada ou removida pelo js.

// openMenu = variável criada
// closeMenu = variável criada
// menu-expanded = classe do menu expandido criada no css.

// ALT+SHIFT+DIRECTION = descubra!
function onScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}
function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}


