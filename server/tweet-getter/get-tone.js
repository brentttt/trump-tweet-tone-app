const axios = require('axios');

const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
const tone_analyzer = new ToneAnalyzerV3({
  username: '081e904d-6b70-4151-8f7d-c5a0ba4a1dbe',
  password: 'cnytxuKEf238',
  version_date: '2016-05-19'
});

const getTone = (text) => {
  return new Promise((resolve, reject) => {
    tone_analyzer.tone({
      text: text
    }, function(error, response) {
      if (error)
        console.log('error:', error);
      else
        resolve(JSON.stringify(response.document_tone, null, 0));
        //console.log(JSON.stringify(response, null, 2));
    });
  });
};

module.exports = {
  getTone
};
