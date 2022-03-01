const { join } = require('path');

const getHome = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'client', 'HTML', 'index.html'));
};

module.exports = getHome;
