import { pick } from 'lodash';
import { Querie, validate } from '../models/query';
import express from 'express';
const router = express.Router();

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const query = new Querie(pick(req.body, ['fullname', 'email', 'msg']));
    await query.save();

    res.send('Message has been sent');
});

export default router;