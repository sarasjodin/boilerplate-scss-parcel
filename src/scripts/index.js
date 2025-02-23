/* import '../styles/main.scss'; */

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.nav .menu'); // Adjusted selector to be more specific

  // Toggle the active class when the hamburger menu is clicked
  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  // Close the menu when clicking outside of it
  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
      menu.classList.remove('active');
    }
  });

  // Dropdown for Portfolio Items
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


// Byt tema
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  body.offsetHeight; // Tvingar ommålning

  // Uppdatera knappens text
  if (body.classList.contains('dark-mode')) {
    themeToggle.textContent = '☀️ Light Mode';
  } else {
    themeToggle.textContent = '🌙 Dark Mode';
  }

  // Spara temat i LocalStorage
  localStorage.setItem(
    'theme',
    body.classList.contains('dark-mode') ? 'dark' : 'light'
  );
});

// Kolla användarens sparade inställning
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  themeToggle.textContent = '☀️ Light Mode';
}

document.addEventListener('DOMContentLoaded', function () {
  var phoneNumber = '+393454171570';
  var phoneLink = document.getElementById('phone-link');

  // Uppdatera href-attributet till tel-länk
  phoneLink.setAttribute('href', 'tel:' + phoneNumber);

  // Uppdatera synlig text
  phoneLink.textContent = '📞 ' + phoneNumber + ' (Italy)';
});
