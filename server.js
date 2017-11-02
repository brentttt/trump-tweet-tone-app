const express = require('express');
const fallback = require('express-history-api-fallback')

const app = express();
const root = __dirname + './public';

app.use(express.static(root))
app.use(fallback('index.html', { root }))
