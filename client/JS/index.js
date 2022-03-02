/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
const loading = document.querySelector('.loading');
const showLoading = () => { loading.style.display = 'block'; };
const hideLoading = () => { loading.style.display = 'none'; };

window.addEventListener('load', () => {
  getDataApi('/posts', 'GET', handlePosts);
  getDataApi('/users', 'GET', handleUsers);
});

cards.addEventListener('click', (e) => {
  if (e.target.hasAttribute('data-index')) {
    const id = e.target.getAttribute('data-index');
    getDataApi(`/posts/${id}/comments`, 'GET', handleComments);
  }
});

const close = document.querySelector('.close');
close.addEventListener('click', () => { bgComments.style.display = 'none'; });
