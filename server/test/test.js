// import request from 'supertest';
const request = require('supertest');

const app = require('../app');

describe('Route /', () => {
  test('Route /, status 200, json header', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /html/)
      .end((err, res) => {
        if (err) return done(err);
        // expect(Array.isArray(res.body)).toBe(true);
        // expect(res.body[0]).toEqual({
        //   userId: 11,
        //   id: 101,
        //   title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        //   body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
        // });
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
      .post('/addpost')
    //   .send({
    //     userId: 12,
    //     id: 111,
    //     title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    //     body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    //   })
      .expect(201)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(201);
        return done();
      });
  });
});

describe('Route /posts/:id/comments', () => {
  test('Route /posts/:id/comments, status 200, json header', (done) => {
    request(app)
      .get('/posts/1/comments')
      .expect(200)
    //   .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        // expect(res.body).toBeInstanceOf(Object);
        // expect(res.body).toEqual([
        //   {
        //     postId: 1,
        //     id: 1,
        //     name: 'id labore ex et quam laborum',
        //     email: 'Eliseo@gardner.biz',
        //     body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium',
        //   },
        //   {
        //     postId: 1,
        //     id: 2,
        //     name: 'quo vero reiciendis velit similique earum',
        //     email: 'Jayne_Kuhic@sydney.com',
        //     body: 'est natus enim nihil est dolore omnis voluptatem numquam et omnis occaecati quod ullam at voluptatem error expedita pariatur nihil sint nostrum voluptatem reiciendis et',
        //   },
        //   {
        //     postId: 1,
        //     id: 3,
        //     name: 'odio adipisci rerum aut animi',
        //     email: 'Nikita@garfield.biz',
        //     body: 'quia molestiae reprehenderit quasi aspernatur aut expedita occaecati aliquam eveniet laudantium omnis quibusdam delectus saepe quia accusamus maiores nam est cum et ducimus et vero voluptates excepturi deleniti ratione',
        //   },
        //   {
        //     postId: 1,
        //     id: 4,
        //     name: 'alias odio sit',
        //     email: 'Lew@alysha.tv',
        //     body: 'non et atque occaecati deserunt quas accusantium unde odit nobis qui voluptatem quia voluptas consequuntur itaque dolor et qui rerum deleniti ut occaecati',
        //   },
        //   {
        //     postId: 1,
        //     id: 5,
        //     name: 'vero eaque aliquid doloribus et culpa',
        //     email: 'Hayden@althea.biz',
        //     body: 'harum non quasi et ratione tempore iure ex voluptates in ratione harum architecto fugit inventore cupiditate voluptates magni quo et',
        //   }]);
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
