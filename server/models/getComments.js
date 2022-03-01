const axios = require('axios');

const getPostsCommentsApi = (url, res) => {
  axios
    .get(url)
    .then((response) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(JSON.stringify(response.data));
    })
    .catch();
};

module.exports = getPostsCommentsApi;
