import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import taleService from "./taleService";

const initialState = {
  tales: [],
  currentTale: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create tale
export const createTale = createAsyncThunk(
  "tale/create",
  async (taleData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().authAdmin.admin.token;
      return await taleService.createTale(taleData, token);
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

// Get user tales
export const getTales = createAsyncThunk("tale/getAll", async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await taleService.getTales(token);
  } catch (error) {
    console.log(error);
    const message =
      (error.message && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// Delete user tale
export const deleteTale = createAsyncThunk(
  "tale/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await taleService.deleteTale(id, token);
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

export const taleSlice = createSlice({
  name: "tale",
  initialState,
  reducers: {
    reset: (state) => initialState,
    setCurrentTale: (state, action) => {
      state.currentTale = action.payload;
    },
    unsetCurrentTale: (state) => {
      state.currentTale = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTale.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTale.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.tales.push(action.payload);
      })
      .addCase(createTale.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getTales.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTales.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.tales = action.payload;
      })
      .addCase(getTales.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteTale.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTale.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.tales = state.tales.filter(
          (tale) => tale._id !== action.payload.id
        );
      })
      .addCase(deleteTale.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset, setCurrentTale, unsetCurrentTale } = taleSlice.actions;
export default taleSlice.reducer;
