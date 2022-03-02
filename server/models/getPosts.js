const fetch = require('node-fetch');
const fs = require('fs');
const { join } = require('path');

const getPostsApi = (url, res) => fetch(url).then((data) => data.json())
  .then((json) => {
    const filePath = join(__dirname, 'posts.json');
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) throw err;
      let postList = JSON.parse(data);
      postList = [...postList, ...json];
      res.json(postList);
    });
  })
  .catch();

module.exports = getPostsApi;
