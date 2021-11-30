import { combineReducers } from "redux";
import blogPostsReducer from "./blogPostsReducer";
import userReducers from "./userReducer";

export default combineReducers({
  posts: blogPostsReducer,
  users: userReducers,
});
