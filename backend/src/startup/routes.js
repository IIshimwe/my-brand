import articles from '../routes/articles';
import auth from '../routes/auth.js';
import users from '../routes/users.js';
import { json } from 'express';
import cookieParser from 'cookie-parser';

module.exports = function (app) {
    app.use(json());
    app.use(cookieParser());

    // Articles endpoints
    app.use('/api/blogs', articles);

    // Authentication endpoints
    app.use('/api/users', users);
    app.use('/api/auth', auth);
};