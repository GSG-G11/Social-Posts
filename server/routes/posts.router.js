const router = require('express').Router();
const { getPosts, addPost, getComments } = require('../controllers/posts.controller');

router.get('/', getPosts);
router.get('/:id/comments', getComments);
router.post('/addpost', addPost);

module.exports = router;
