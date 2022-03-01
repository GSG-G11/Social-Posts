const axios = require('axios');
const fs = require('fs');
const { join } = require('path');

const getPostsApi = (url, res) => {
  axios
    .get(url)
    .then((response) => {
      const filePath = join(__dirname, 'posts.json');
      fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) throw err;
        let postList = JSON.parse(data);
        postList = [...postList, ...response.data];
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(JSON.stringify(postList));
      });
    })
    .catch();
};

module.exports = getPostsApi;
