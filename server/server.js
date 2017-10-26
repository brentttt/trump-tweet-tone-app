require('./config/config');
const express = require('express');

const { minutes } = require('./utils');
const { getTweets } = require('./tweet-getter/tweet-getter');

const app = express();
const port = process.env.PORT;

getTweets();

// setInterval(() => {
//   request.then((data) => {
//     console.log(data);
//   });
// }, minutes(20));

app.use(express.static(__dirname + './../public'));

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
