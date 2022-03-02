const fetch = require('node-fetch');

const getUsersApi = (url, res) => fetch(url)
  .then((data) => data.json())
  .then((json) => {
    res.json(json);
  })
  .catch();

module.exports = getUsersApi;
