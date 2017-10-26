const OAuth = require('oauth');

const requestTweets = new Promise((resolve, reject) => {
  const oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    'lAH4LTXeo3bPMz3bIuWPxAxAr', //app key
    'MQ3kpFtgITFO263kayVSDxHpeefIQGUeGtFbCUnVjvjYEORJeY', //secret
    '1.0A',
    null,
    'HMAC-SHA1'
  );
  const data = oauth.get(
    'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=realdonaldtrump&count=1',
    '892485628004380672-OWWKtK8A4fBs3RL29aDC9zovneqG5WV', //user token
    'KjmN6BpRtweXtrE7YpweKpx9Dcf99aaCNND7BYvZDimCm', //user secret
    function (e, data, res){
      if (e) console.error(e);
      data = JSON.parse(data);
      data = data.map((tweet) => {
        return {
          "created_at": tweet["created_at"],
          "id": tweet["id"],
          "text": tweet["text"],
        }
      });
      resolve(data);
    });
});

module.exports = {
  requestTweets
};
