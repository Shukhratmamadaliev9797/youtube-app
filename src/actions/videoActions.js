import axios from "axios";
import {
  YOUTUBE_VIDEO_DETAILS_FAIL,
  YOUTUBE_VIDEO_DETAILS_REQUEST,
  YOUTUBE_VIDEO_DETAILS_SUCCESS,
  YOUTUBE_VIDEO_FAIL,
  YOUTUBE_VIDEO_REQUEST,
  YOUTUBE_VIDEO_SUCCESS,
} from "../contants/videosConstants";
const KEY = process.env.REACT_APP_API_KEY;
export const videoList = (term) => {
  return async (dispatch) => {
    dispatch({ type: YOUTUBE_VIDEO_REQUEST, payload: term });
    try {
      const { data } = await axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            part: "snippet",
            maxResults: 25,
            key: KEY,
            type: "video",
            q: term,
          },
        }
      );
      dispatch({ type: YOUTUBE_VIDEO_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: YOUTUBE_VIDEO_FAIL, payload: error.message });
    }
  };
};

export const videoDetails = (videoId) => {
  return async (dispatch) => {
    dispatch({ type: YOUTUBE_VIDEO_DETAILS_REQUEST, payload: videoId });
    try {
      const { data } = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search`,
        { params: { part: "snippet", key: KEY, id: videoId, type: "video" } }
      );
      dispatch({ type: YOUTUBE_VIDEO_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: YOUTUBE_VIDEO_DETAILS_FAIL, payload: error.message });
    }
  };
};

// GET https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=dv1AiZLGytg&key=[YOUR_API_KEY] HTTP/1.1

// Accept: application/json
