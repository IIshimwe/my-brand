const users = require('./routes/users');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost/capstone')
    .then(() => console.log('Connected to mongoDB'))
    .catch(err => console.error('Could not connect to MongoDBNamespace...', err));

app.use(express.json());
app.use('/api/users', users);


const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening to port: ${port}...`));