//Action generator
export const selectSong = (song) => {
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};
