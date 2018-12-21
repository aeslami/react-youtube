import './VideoListItem.css';
import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
  const imageURL = video.snippet.thumbnails.default.url;
  return (
    <div>
      <li onClick={() => onVideoSelect(video)}>
        <img src={imageURL} />
        <p>{video.snippet.title}</p>
      </li>
    </div>
  );
};

export default VideoListItem;
