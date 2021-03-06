/* eslint-disable linebreak-style */
// import request from 'supertest';
const request = require('supertest');

const app = require('../app');

describe('Route /', () => {
  test('Route /, status 200, json header', (done) => {
    request(app)
      .get('/')
      .expect(200)
      // .expect('Content-Type', /html/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(200);
        return done();
      });
  });

  test('Get HTML file, status 200', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /html/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(200);
        return done();
      });
  });

  test('Get CSS file, status 200', (done) => {
    request(app)
      .get('/CSS/style.css')
      .expect(200)
      .expect('Content-Type', /css/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(200);
        return done();
      });
  });

  test('Get JS file, status 200', (done) => {
    request(app)
      .get('/JS/getData.js')
      .expect(200)
      .expect('Content-Type', /javascript/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(200);
        return done();
      });
  });

  test('Get JS file, status 200', (done) => {
    request(app)
      .get('/JS/dom.js')
      .expect(200)
      .expect('Content-Type', /javascript/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(200);
        return done();
      });
  });

  test('Get JS file, status 200', (done) => {
    request(app)
      .get('/JS/index.js')
      .expect(200)
      .expect('Content-Type', /javascript/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(200);
        return done();
      });
  });
});

describe('Not Found', () => {
  test('Route /notFound, status 404, json header', (done) => {
    request(app)
      .get('/notFound')
      .expect(404)
      .expect('Content-Type', /html/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(404);
        return done();
      });
  });

  test('Get CSS file, status 404', (done) => {
    request(app)
      .get('/CSS/error.css')
      .expect(200)
      .expect('Content-Type', /css/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(200);
        return done();
      });
  });
});

describe('Add new Post', () => {
  test('Route Post /addpost, status 201, json header', (done) => {
    request(app)
      .post('/posts/addpost')
      .expect(302)
      .expect('Content-Type', 'text/plain; charset=utf-8')
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(302);
        return done();
      });
  });
});

describe('Route /posts/:id/comments', () => {
  test('Route /posts/:id/comments, status 200, json header', (done) => {
    request(app)
      .get('/posts/1/comments')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(200);
        return done();
      });
  });

  test('Route /posts/0/comments, status 200, json header', (done) => {
    request(app)
      .get('/posts/0/comments')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toBeInstanceOf(Object);
        expect(res.body).toEqual({});
        return done();
      });
  });
});
