import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import videoService from "./videoService";

const initialState = {
  videos: [],
  current: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create video
export const createVideo = createAsyncThunk(
  "video/create",
  async (videoData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await videoService.createVideo(videoData, token);
    } catch (error) {
      console.log(error);
      const message =
        (error.message && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get user videos
export const getVideos = createAsyncThunk(
  "video/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await videoService.getVideos(token);
    } catch (error) {
      console.log(error);
      const message =
        (error.message && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Delete user video
export const deleteVideo = createAsyncThunk(
  "video/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await videoService.deleteVideo(id, token);
    } catch (error) {
      console.log(error);
      const message =
        (error.message && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    reset: (state) => initialState,
    unsetCurrent: (state) => {
      state.current = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createVideo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.videos.push(action.payload);
      })
      .addCase(createVideo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getVideos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.videos = action.payload;
      })
      .addCase(getVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteVideo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.videos = state.videos.filter(
          (video) => video._id !== action.payload.id
        );
      })
      .addCase(deleteVideo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset, setCurrent, unsetCurrent } = videoSlice.actions;
export default videoSlice.reducer;
