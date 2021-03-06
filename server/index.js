const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/api/greeting', (req, res) => {
  const name = req.query.name;
  console.log(`Hello ${name} from the server side!`);
  res.send({ greeting: `Hello ${name}!` });
});

app.listen(3001, () => {
  console.log('Express server is running on http://localhost:3001');
});
