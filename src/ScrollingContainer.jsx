import React from 'react';

import PhotoContainer from './PhotoContainer'

function ScrollingContainer({ photos }) {
    return (<div className="scrollingContainer">
    {
      photos.map(photo => (
        <PhotoContainer photo={photo}  key={photo.id}/>))
    }
  </div>
  );
}

export default ScrollingContainer;