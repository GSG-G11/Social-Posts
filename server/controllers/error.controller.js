const { join } = require('path');

const clientError = (req, res) => {
  res.status(404).sendFile(join(__dirname, '..', '..', 'client', 'HTML', '404.html'));
};

const serverError = (err, req, res) => {
  res.status(500).sendFile(join(__dirname, '..', '..', 'client', 'HTML', '500.html'));
};

module.exports = {
  clientError,
  serverError,
};
