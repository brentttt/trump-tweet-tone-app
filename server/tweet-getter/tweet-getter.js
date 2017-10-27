const { requestTweets } = require('./request-tweets');
const { getTone } = require('./get-tone');
const { Tweet } = require('./save-tweets');
const { mongoose } = require('./mongoose');

const getTweets = () => {
  requestTweets.then((data) => {
    data.forEach((tweet) => {

      Tweet.find({id: tweet.id}).exec().then((res) => {
        if(res.length === 0) {
          getTone(tweet['text']).then((tone) => {
            tweet.tone = tone;

            Tweet.count({}, function(err, count){
              tweet.count = count + 1;
              console.log(tweet);

              const newTweet = new Tweet(tweet);
              newTweet.save().then(() => {
              }).catch((err) => {
                console.log('ERROR', err);
              });
            });

          }).catch((err) => {
            console.log(err);
          });
        }
      });
    });
  });
}

module.exports = {
  getTweets
}
