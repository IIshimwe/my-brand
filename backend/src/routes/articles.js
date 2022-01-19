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

router.get('/', async (req, res) => {
    const articles = await Article.find();
    res.send(articles);
});

router.get('/:id', async (req, res) => {
    const article = await Article.findById(req.params.id);

    if (!article) return res.status(404).send('The article with the given ID was not found.');

    res.send(article);
});


export default router;