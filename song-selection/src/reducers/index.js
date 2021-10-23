import { combineReducers } from "redux";

export const songsReducer = () => {
  return [
    {
      title: "Gnat",
      length: "3:12",
    },
    {
      title: "Love The Way You Lie",
      length: "4:21",
    },
    {
      title: "I Can Tell",
      length: "3:01",
    },
  ];
};

export const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return null;
};

const reducers = combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});

export default reducers;
