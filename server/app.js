/* eslint-disable linebreak-style */
const express = require('express');
const path = require('path');
const compression = require('compression');
const routerHome = require('./routes/home.router');
const routerPosts = require('./routes/posts.router');
const { clientError, serverError } = require('./controllers/error.controller');

const app = express();

app.disable('x-powered-by');

app.set('localhost', process.env.HOSTNAME || 'localhost');
app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'client'), { maxAge: '30d' }));

app.use('/', routerHome);
app.use('/posts', routerPosts);
app.use(clientError);
app.use(serverError);

app.listen(app.get('port'), () => {
  console.log('App running on port', app.get('port'));
});
