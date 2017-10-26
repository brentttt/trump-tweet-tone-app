import React, { Component } from 'react';

export default class Tweet extends Component {
  render() {
    const tone = JSON.parse(this.props.tweet.tone).tone_categories;
    const tweet = this.props.tweet.text;

    return(
      <div className="tweet">
      <div className="tweet__text"><span>{tweet}</span></div>
        <div className="tweet__charts">
          {tone.map((category) => {
            return (
              <div key={category.category_id} className="tweet__charts__section">
                {category.tones.map((toneType) => {
                  return (
                    <div
                      key={toneType.tone_id}
                      className="emotion_tone__type"
                      style={{height: (toneType.score * 100) + "%"}}
                    >
                      <span
                        className="emotion_tone__type__text"
                      >
                        {toneType.tone_name}
                      </span>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
  );
  }
}
