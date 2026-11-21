const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

const closeMenu = () => {
  navLinks.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
};

menuBtn.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(isOpen));
});

navLinks.addEventListener('click', (e) => {
  if (e.target.closest('a')) closeMenu();
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.nav')) closeMenu();
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) closeMenu();
});