import React, { Component } from 'react';
import datetime from 'node-datetime';

export default class Tweet extends Component {
  render() {
    if(!this.props.tweet) {
      return (
        <div className="tweet tweet-not-found">
          <h1><i className="fa fa-spinner" aria-hidden="true"></i></h1>
        </div>
      )
    }
    const tone = JSON.parse(this.props.tweet.tone).tone_categories;
    let tweet = this.props.tweet.text;

    tweet = tweet.replace(/&amp;/, '&');

    if(tweet.match(/https/)) {
      tweet = tweet.replace(/(https.+\b)/, '<a href="$&" target="blank">&#128279;</a>');
      // let link = tweet.match(/(https.+\b)/)[0];
      // tweet = [
      //   tweet.replace(link, ''),
      //   link
      // ]
      // console.log(tweet);
    }

    function createMarkup() { return {__html: tweet}; };

    const dt = (datetime.create(this.props.tweet.created_at, 'I:Mp - d n Y')).format();

    return(
      <div className="tweet">
      <div className="tweet__text">
        <span className="tweet__text__content" dangerouslySetInnerHTML={createMarkup()}></span>
        <span className="tweet__text__datetime">{dt}</span>
      </div>
        <div className="tweet__charts">
          {tone.map((category) => {
            return (
              <div key={category.category_id} className="tweet__charts__section">
                {category.tones.map((toneType) => {
                  const score = toneType.score * 100;
                  return (
                    <div
                      key={toneType.tone_id}
                      className="emotion_tone__wrapper"
                    >
                      <div
                        className="emotion_tone__type"
                        style={{height: score + "%"}}
                      >
                      <span
                          className={"emotion_tone__type__score" + (score > 10 ? "" : " emotion_tone__type__score--small")}
                        >
                          {Math.round(score)}
                      </span>
                        <span
                          className="emotion_tone__type__text"
                        >
                          {toneType.tone_name}
                        </span>
                      </div>
                    </div>
                  );
                })}
                <div className="tweet__charts__section__name">{category.category_name}</div>
              </div>
            );
          })}
        </div>
      </div>
  );
  }
}
