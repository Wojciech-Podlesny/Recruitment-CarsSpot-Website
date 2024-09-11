const mobileMenu = document.querySelector('.mobile-menu');
const menuButton = document.querySelector('.menu-button');
const closeMenu = document.querySelector('.close-button');

const toggleMenu = () => {
  mobileMenu.classList.toggle('translate-x-full');
  mobileMenu.classList.toggle('-translate-x-full');
}

menuButton.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);