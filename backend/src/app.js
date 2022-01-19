import('dotenv/config');
import articles from './routes/articles';
import auth from './routes/auth.js';
import users from './routes/users.js';
import { connect } from 'mongoose';
import express, { json } from 'express';
import cookieParser from 'cookie-parser';
const app = express();

connect('mongodb://localhost/capstone')
    .then(() => console.log('Connected to mongoDB'))
    .catch(err => console.error('Could not connect to MongoDBNamespace...', err));

app.use(json());
// Articles endpoints
// app.use('/api/ar', articles);
// Authentication endpoints
app.use(cookieParser());
app.use('/api/users', users);
app.use('/api/auth', auth);


const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening to port: ${port}...`));