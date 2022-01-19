import { pick } from 'lodash';
import { Article, validate } from '../models/article';
import express from 'express';
const router = express.Router();

router.get('/', async (req, res) => {
    const articles = await Article.find();
    res.send(articles);
});

// Should protect this route with auth
router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let article = new Article(pick(req.body, ['title', 'author', 'content']));
    article = await article.save();

    res.send(article);
});
// Should protect this route with auth
router.put('/:id', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const article = await Article.findByIdAndUpdate(req.params.id, pick(req.body, ['title', 'content']), {
        new: true
    });

    if (!article) return res.status(404).send('The article with the given ID was not found.');

    res.send(article);
});
// Should protect this route with auth  [auth, admin],
router.delete('/:id', async (req, res) => {
    const article = await Article.findByIdAndRemove(req.params.id);

    if (!article) return res.status(404).send('The article with the given ID was not found.');

    res.send(article);
});

router.get('/:id', async (req, res) => {
    const article = await Article.findById(req.params.id);

    if (!article) return res.status(404).send('The article with the given ID was not found.');

    res.send(article);
});

export default router;