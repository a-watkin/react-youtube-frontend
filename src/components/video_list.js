import React from "react";

const VideoList = props => {
  console.log(props.videos);
  return (
    <ul className="col-md-4 list-group">
      {props.videos.map(video => (
        <li className="list-group-item">{video.snippet.description}</li>
      ))}
    </ul>
  );
};

export default VideoList;
