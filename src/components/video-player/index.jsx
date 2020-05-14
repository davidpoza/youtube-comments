import React from 'react';

export default function videoPlayer() {
  return (
    <iframe
      title="video player"
      id="ytplayer"
      type="text/html"
      width="640"
      height="360"
      src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
      frameBorder="0"
    />
  );
}
