import bcrypt from 'bcrypt';
import { pick } from 'lodash';
import { User, validate } from '../models/user';
import express from 'express';
const router = express.Router();

// router.get('/api/users/me', autho, async (req, res) => {
//     const user = User.findById(req.user._id).select('-password');
//     res.send(user);
// });

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send('User already regisered');

    user = new User(pick(req.body, ['name', 'email', 'password']));
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(req.body.password, salt);
    user = await user.save();

    const token = user.generateAuthToken();
    res.header('x-auth-token', token).send(pick(user, ['name', 'email']));

});

export default router;