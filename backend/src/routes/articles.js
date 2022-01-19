import { pick } from 'lodash';
import { Article, validate } from '../models/article';
import express from 'express';
const router = express.Router();

// Should protect this route with auth
router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let article = await Article.findOne({ title: req.body.title });
    if (article) return res.status(400).send('Article already regisered');

    article = new Article(pick(req.body, ['title', 'author', 'content']));
    await article.save();

    res.send(article);
});

export default router;