const express = require('express');

const app = express();

// Read static file of terms and conditions.
app.use(express.static('public'));

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Connected to mongoDB with port: ${port}`));