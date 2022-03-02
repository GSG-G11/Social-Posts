const getDataAPI = require('../models/getDataAPI');

const getUsers = (req, res) => {
  const urlApi = 'https://jsonplaceholder.typicode.com/users';
  getDataAPI(urlApi, res);
};

module.exports = getUsers;
