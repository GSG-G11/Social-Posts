/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const getData = () => fetch('http://localhost:3000/posts', { method: 'GET' }).then((data) => data.json()).then((data) => handlePosts(data)).catch();
const addPost = (data) => fetch('http://localhost:3000/posts/addpost', { method: 'POST', body: JSON.stringify(data) }).then((res) => res.json()).then((res) => handlePosts(res)).catch();
const getComments = (id) => fetch(`http://localhost:3000/posts/${id}/comments`, { method: 'GET' }).then((res) => res.json()).then((res) => handleComments(res)).catch();
