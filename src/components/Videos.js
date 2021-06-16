import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Videos() {
  const listVideos = useSelector((state) => state.listVideos);

  const { loading, error, videos } = listVideos;
  if (!videos) {
    return <div>Loading</div>;
  }
  console.log(videos);
  const renderVideos = () => {
    return videos.items.map((video) => {
      return (
        <div className="videos__card" key={video.id.videoId}>
          <Link to={`video/${video.id.videoId}`}>
            <div className="videos__card-img">
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
              />
            </div>
          </Link>

          <div className="videos__card-details">
            <h3>{video.snippet.title.substring(0, 30)}...</h3>
            <h5>
              Channel: <span>{video.snippet.channelTitle}</span>
            </h5>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="videos__container">
      {loading ? "loading" : error ? error : renderVideos()}
    </div>
  );
}
