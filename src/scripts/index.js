import '../styles/main.scss';

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');

  // Öppna/stäng hamburgermeny
  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  // Stäng hamburgermeny genom att klicka utanför
  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
      menu.classList.remove('active');
    }
  });

  // Dropdown-meny för "Produkter"
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('mouseenter', () => {
      dropdown.querySelector('.dropdown-menu').style.display = 'block';
    });

    dropdown.addEventListener('mouseleave', () => {
      dropdown.querySelector('.dropdown-menu').style.display = 'none';
    });
  });
});
