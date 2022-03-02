const fetch = require('node-fetch');

const getDataAPI = (url, res) => fetch(url)
  .then((data) => data.json())
  .then((json) => {
    res.json(json);
  })
  .catch();

module.exports = getDataAPI;
