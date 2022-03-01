/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
window.addEventListener('load', getData);

cards.addEventListener('click', (e) => {
  const id = e.target.getAttribute('data-index');
  getComments(id);
});

const close = document.querySelector('.close');
close.addEventListener('click', () => {
  bgComments.style.display = 'none';
});
