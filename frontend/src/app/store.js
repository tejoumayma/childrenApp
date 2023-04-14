import { configureStore } from "@reduxjs/toolkit";
import authUserReducer from "../features/auth/authUser/authUserSlice";
import videoReducer from "../features/videos/videoSlice";
import taleReducer from "../features/tales/taleSlice";
import authAdminReducer from "../features/auth/authAdmin/authadminSlice";
export const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    authAdmin: authAdminReducer,
    Videos: videoReducer,
    Tales: taleReducer,
  },
});
