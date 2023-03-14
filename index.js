const bars = document.getElementById('bars');
const menu = document.getElementById('menu');

const closeMenu = () => {
    let barsChild = bars.children[0];
    if (barsChild.classList.contains('fa-bars')) {
        barsChild.classList.remove('fa-bars');
        barsChild.classList.add('fa-times');
        menu.classList.add('top-[60px]');
        menu.classList.add('opacity-100');
    }
    else {
        barsChild.classList.remove('fa-times');
        barsChild.classList.add('fa-bars');
        menu.classList.remove('opacity-100');
        menu.classList.remove('top-[80px]');
    }
}



bars.addEventListener('click', closeMenu);