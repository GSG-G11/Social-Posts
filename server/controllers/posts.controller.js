const fs = require('fs');
const { join } = require('path');
const getPostsApi = require('../models/getPosts');
const getPostsCommentsApi = require('../models/getComments');

const getPosts = (req, res) => {
  const urlApi = 'https://jsonplaceholder.typicode.com/posts';
  getPostsApi(urlApi, res);
};

const addPost = (req, res) => {
  const filePath = join(__dirname, '..', 'models', 'posts.json');
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) throw err;
    const postList = JSON.parse(data);
    console.log(req.body);
    postList.push(req.body);

    const dataPost = JSON.stringify(postList);
    fs.writeFile(filePath, dataPost, (error) => {
      if (error) throw err;
      res.redirect('/');
    });
  });
};

const getComments = (req, res) => {
  const urlApi = `https://jsonplaceholder.typicode.com/posts/${req.params.id}/comments`;
  getPostsCommentsApi(urlApi, res);
};

module.exports = {
  getPosts,
  addPost,
  getComments,
};
