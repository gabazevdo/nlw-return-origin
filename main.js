onScroll();
window.addEventListener('scroll', onScroll);

function onScroll() {
  showNavOnScrool();
  showBackToScrool();
}

function showNavOnScrool() {
  scrollY > 0
    ? navigation.classList.add('scroll')
    : navigation.classList.remove('scroll')
}

function showBackToScrool(){
  scrollY > 500
  ? backToTop.classList.add('show')
  : backToTop.classList.remove('show')

}

function openMenu() {
  document.body.classList.add('menu-expended')
}

function closeMenu() {
  document.body.classList.remove('menu-expended')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 900
}).reveal(`
  #home, 
  #home img, 
  #home .stats,
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content,
  #about img
  `)
