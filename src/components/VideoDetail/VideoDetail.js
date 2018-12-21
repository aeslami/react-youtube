import './VideoDetail.css';
import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoID = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoID}`;

  return (
    <div>
      <div className="video-container">
        <iframe
          width="853"
          height="480"
          src={url}
          frameBorder="0"
          allowFullScreen
        />
      </div>
      <h1>{video.snippet.title}</h1>
      <h4>{video.snippet.description}</h4>
    </div>
  );
};

export default VideoDetail;
