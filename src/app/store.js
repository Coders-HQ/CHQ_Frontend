import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Features/userSlice";

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.log(e);
  }
}

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
