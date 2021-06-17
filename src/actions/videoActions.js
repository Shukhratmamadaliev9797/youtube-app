import axios from "axios";
import {
  YOUTUBE_VIDEO_FAIL,
  YOUTUBE_VIDEO_REQUEST,
  YOUTUBE_VIDEO_SUCCESS,
} from "../contants/videosConstants";
const KEY =
  process.env.REACT_APP_API_KEY || "AIzaSyD8dasTk3GqvZzWnM2BKKXwL90z3rWqqMc";
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
