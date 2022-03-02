/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const getData = () => fetch('/posts', { method: 'GET' }).then((data) => data.json()).then((json) => handlePosts(json)).catch();
const getUser = () => fetch('/users', { method: 'GET' }).then((data) => data.json()).then((json) => handleUsers(json)).catch();
const getComments = (id) => fetch(`/posts/${id}/comments`, { method: 'GET' }).then((res) => res.json()).then((res) => handleComments(res)).catch();
