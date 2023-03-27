import React from 'react';

function PhotoContainer({ photo }) {
    return (
    <div className="photoContainer">
        <div>
            <img src={photo.url} alt={photo.title}/>
            <span className="photoTitle">
                {photo.title}
            </span>
        </div>
    </div>
  )
}

export default PhotoContainer;