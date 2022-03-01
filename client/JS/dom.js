/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const cards = document.querySelector('.cards');
const comments = document.querySelector('.comments');
const bgComments = document.querySelector('.bg-comments');

const handlePosts = (data) => {
  cards.textContent = '';
  data.forEach((post) => {
    const card = document.createElement('div');
    card.className = 'card';

    const link = document.createElement('a');
    const title = document.createElement('h4');
    title.setAttribute('data-index', post.id);
    title.className = 'title-post';
    title.textContent = post.title;
    const body = document.createElement('p');
    body.className = 'desc-post';
    body.textContent = post.body;

    link.appendChild(title);
    link.appendChild(body);
    card.appendChild(link);

    cards.appendChild(card);
  });
};

const handleComments = (data) => {
  bgComments.style.display = 'flex';
  comments.textContent = '';
  data.forEach((post) => {
    const comment = document.createElement('div');
    comment.className = 'comment';

    const wrapNameEmail = document.createElement('div');
    wrapNameEmail.className = 'wrap-name-email';

    const name = document.createElement('span');
    name.className = 'name';
    name.textContent = post.name;
    const email = document.createElement('span');
    email.className = 'email';
    email.textContent = post.email;

    const body = document.createElement('p');
    body.className = 'body';
    body.textContent = post.body;

    wrapNameEmail.appendChild(name);
    wrapNameEmail.appendChild(email);
    comment.appendChild(wrapNameEmail);
    comment.appendChild(body);

    comments.appendChild(comment);
  });
};
