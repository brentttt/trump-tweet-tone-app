import React from 'react';

import LeftArrow from './arrows/LeftArrow';
import RightArrow from './arrows/RightArrow';

const Arrows = (props) => (
  <div>
    <LeftArrow
      updateHash={props.updateHash}
      handlePrevTweet={props.handlePrevTweet}
      prevTweet={props.prevTweet}
      nextTweet={props.nextTweet}
    />
    <RightArrow
      updateHash={props.updateHash}
      handleNextTweet={props.handleNextTweet}
      prevTweet={props.prevTweet}
      nextTweet={props.nextTweet}
    />
  </div>
);

export default Arrows;
