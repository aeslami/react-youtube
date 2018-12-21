import './VideoList.css';
import React from 'react';
import VideoListItem from '../VideoListItem/VideoListItem';

const VideoList = ({ videos, onVideoSelect }) => {
  videos.shift();
  const videoItems = videos.map(video => (
    <VideoListItem
      onVideoSelect={onVideoSelect}
      key={video.etag}
      video={video}
    />
  ));
  return <ul>{videoItems}</ul>;
};

export default VideoList;
