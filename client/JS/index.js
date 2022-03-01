/* eslint-disable no-undef */
window.addEventListener('load', getData);

const addPostBtn = document.querySelector('#post-btn');
addPostBtn.addEventListener('click', () => {
  const body = document.querySelector('#description-input').value;
  const title = document.querySelector('#title-input').value;
  const data = {
    body,
    title,
  };
  addPost(data);
});

cards.addEventListener('click', (e) => {
  const id = e.target.getAttribute('data-index');
  getComments(id);
});

const close = document.querySelector('.close');
close.addEventListener('click', () => {
  bgComments.style.display = 'none';
});
