const getUsersApi = require('../models/getUsers');

const getUsers = (req, res) => {
  const urlApi = 'https://jsonplaceholder.typicode.com/users';
  getUsersApi(urlApi, res);
};

module.exports = getUsers;
