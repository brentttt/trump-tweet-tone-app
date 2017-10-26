import React, { Component } from 'react';

import Header from './Header';
import Tweet from './Tweet';
import Arrows from './Arrows';

export default class TrumpTweetTracker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: [{
    "created_at" : "Fri Oct 13 22:01:57 +0000 2017",
    "id" : "918960024256434200",
    "text" : "Jeff Flake, with an 18% approval rating in Arizona, said \"a lot of my colleagues have spoken out.\" Really, they just gave me a standing O!",
    "tone" : "{\"tone_categories\":[{\"tones\":[{\"score\":0.3,\"tone_id\":\"anger\",\"tone_name\":\"Anger\"},{\"score\":0.6,\"tone_id\":\"disgust\",\"tone_name\":\"Disgust\"},{\"score\":0.4,\"tone_id\":\"fear\",\"tone_name\":\"Fear\"},{\"score\":0.6,\"tone_id\":\"joy\",\"tone_name\":\"Joy\"},{\"score\":0.5,\"tone_id\":\"sadness\",\"tone_name\":\"Sadness\"}],\"category_id\":\"emotion_tone\",\"category_name\":\"Emotion Tone\"},{\"tones\":[{\"score\":0.9,\"tone_id\":\"analytical\",\"tone_name\":\"Analytical\"},{\"score\":1,\"tone_id\":\"confident\",\"tone_name\":\"Confident\"},{\"score\":0.4,\"tone_id\":\"tentative\",\"tone_name\":\"Tentative\"}],\"category_id\":\"language_tone\",\"category_name\":\"Language Tone\"},{\"tones\":[{\"score\":0.4,\"tone_id\":\"openness_big5\",\"tone_name\":\"Openness\"},{\"score\":0.8,\"tone_id\":\"conscientiousness_big5\",\"tone_name\":\"Conscientiousness\"},{\"score\":0.2,\"tone_id\":\"extraversion_big5\",\"tone_name\":\"Extraversion\"},{\"score\":0.3,\"tone_id\":\"agreeableness_big5\",\"tone_name\":\"Agreeableness\"},{\"score\":0.5,\"tone_id\":\"emotional_range_big5\",\"tone_name\":\"Emotional Range\"}],\"category_id\":\"social_tone\",\"category_name\":\"Social Tone\"}]}",
    "__v" : 0
}]
    }
  }
  render() {
    const title = 'Trump Tweet Tracker'
    return (
      <div>
        <Header />
        <Arrows />
        <Tweet tweet={this.state.tweets[0]} />
      </div>
    );
  }
};
