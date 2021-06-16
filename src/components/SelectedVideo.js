import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

export default function SelectedVideo(props) {
  const dispatch = useDispatch();
  const videoId = props.match.params.id;
  const [selectedVideo, setSelectedVideo] = useState();
  const listVideos = useSelector((state) => state.listVideos);
  const { loading, error, videos } = listVideos;

  useEffect(() => {
    if (!videos) {
      return <div>Loading</div>;
    }
    const video = videos.items.find((video) => {
      return video.id.videoId === videoId;
    });
    setSelectedVideo(video);
  }, [videoId, videos, dispatch]);

  if (!selectedVideo) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  console.log(videos);
  const renderVideoList = () => {
    return videos.items.map((video) => {
      return (
        <div className="selectedVideo__videos__card" key={video.id.videoId}>
          <Link to={`${video.id.videoId}`}>
            <div className="selectedVideo__videos__card-img">
              <img
                src={video.snippet.thumbnails.default.url}
                alt={video.snippet.title}
              />
            </div>
          </Link>

          <div className="selectedVideo__videos__card-details">
            <h3>{video.snippet.title.substring(0, 30)}...</h3>
            <h4>
              Channel: <span>{video.snippet.channelTitle}</span>
            </h4>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="selectedVideo">
      <div className="selectedVideo__container">
        <iframe
          title="video-player"
          className="selectedVideo__container-screen"
          src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
        />
        <h1>{selectedVideo.snippet.title}</h1>
        <p>{selectedVideo.snippet.description}</p>
        <h3>Chanel: {selectedVideo.snippet.channelTitle}</h3>
      </div>
      <div className="selectedVideo__videos">
        {loading ? "Loading..." : error ? error : renderVideoList()}
      </div>
    </div>
  );
}
