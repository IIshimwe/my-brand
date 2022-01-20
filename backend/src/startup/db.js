import { connect } from 'mongoose';

module.exports = function () {
    connect('mongodb://localhost/capstone')
        .then(() => console.log('Connected to mongoDB'))
        .catch(err => console.error('Could not connect to MongoDB...', err));

};