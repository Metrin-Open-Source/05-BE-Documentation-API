const express = require('express');
const indexRouter = require('./routes/index');
const app = express();
const port = 3000;
const db = require('./models');
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
db.sequelize.sync();


app.use ('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use(express.json());
app.use('/api', indexRouter);


app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})