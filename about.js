const bars = document.getElementById('bars');
const menu = document.getElementById('menu');
// const speakers = document.getElementById('speakers');
const nav = document.getElementById('nav');

const closeMenu = () => {
  const barsChild = bars.children[0];
  if (barsChild.classList.contains('fa-bars')) {
    barsChild.classList.remove('fa-bars');
    barsChild.classList.add('fa-times');
    menu.classList.add('top-[60px]');
    menu.classList.add('opacity-100');
    nav.classList.add('bg-white');
  } else {
    barsChild.classList.remove('fa-times');
    barsChild.classList.add('fa-bars');
    menu.classList.remove('opacity-100');
    menu.classList.remove('top-[80px]');
    nav.classList.remove('bg-white');
  }
};

bars.addEventListener('click', closeMenu);