import('dotenv/config');
import('express-async-errors');
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
const swaggerDocument = YAML.load('./swagger.yaml');
import express from 'express';
const app = express();
require('./startup/routes')(app);
require('./startup/db')();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening to port: ${port}...`));