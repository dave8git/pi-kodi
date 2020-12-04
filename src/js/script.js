function toggleMenu(visible) {
  document.querySelector('.hamburger-content').classList.toggle('hamburger-content-visible', visible);
}

document.querySelector('.fa-bars').addEventListener('click', function (e) {
  e.preventDefault();
  toggleMenu();
  console.log('dupa');
});


