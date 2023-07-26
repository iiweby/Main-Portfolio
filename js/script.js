const btn = document.getElementById('menu-btn');
  const nav = document.getElementById('menu');

  function toggleMenu() {
    btn.classList.toggle('open');
    nav.classList.toggle('hidden');
    nav.classList.toggle('flex');
  }

  btn.addEventListener('click', () => {
    toggleMenu();
  });

  // Add event listeners to each link inside the mobile menu to close the menu
  const mobileMenuLinks = document.querySelectorAll('#menu a');
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('flex')) {
        toggleMenu();
      }
    });
  });

  // Add event listener to the document body to close the menu when clicking outside
  document.body.addEventListener('click', (event) => {
    if (!nav.contains(event.target) && event.target !== btn && nav.classList.contains('flex')) {
      toggleMenu();
    }
  });