import axios from "axios";

const API_URL = "/api/video/";

// Create new video
const createVideo = async (videoData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, videoData, config);
  return response.data;
};

// Get users videos
const getVideos = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);
  return response.data;
};

// Delete video
const deleteVideo = async (videoId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + videoId, config);
  return response.data;
};

const videoService = {
  createVideo,
  getVideos,
  deleteVideo,
};

export default videoService;
