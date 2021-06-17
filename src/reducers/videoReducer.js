import {
  YOUTUBE_VIDEO_FAIL,
  YOUTUBE_VIDEO_REQUEST,
  YOUTUBE_VIDEO_SUCCESS,
} from "../contants/videosConstants";

export const videoReducer = (state = {}, action) => {
  switch (action.type) {
    case YOUTUBE_VIDEO_REQUEST:
      return { loading: true };
    case YOUTUBE_VIDEO_SUCCESS:
      return { loading: false, videos: action.payload };
    case YOUTUBE_VIDEO_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
