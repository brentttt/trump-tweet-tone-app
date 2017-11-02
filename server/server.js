require('./config/config');

const express = require('express');
const fallback = require('express-history-api-fallback')

const app = express();
const root = __dirname + '/../public';
const port = process.env.PORT;

app.use(express.static(root))
app.use(fallback('index.html', { root }));

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
