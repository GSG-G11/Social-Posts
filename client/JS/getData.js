/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const getData = () => fetch('http://localhost:3000/posts', { method: 'GET' }).then((data) => data.json()).then((json) => handlePosts(json)).catch();
const getComments = (id) => fetch(`http://localhost:3000/posts/${id}/comments`, { method: 'GET' }).then((res) => res.json()).then((res) => handleComments(res)).catch();
