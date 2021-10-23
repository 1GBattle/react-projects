import React from "react";
import { connect } from "react-redux";

import { selectSong } from "../actions";

const SongList = ({ songs, selectSong }) => {
  return songs.map((song) => {
    return (
      <div className="ui divided list" key={song.title}>
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              onClick={() => selectSong(song)}
              className="ui button primary"
            >
              selected
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      </div>
    );
  });
};

const mapStateToProps = (state) => {
  return {
    songs: state.songs,
    selectedSong: state.selectedSong,
  };
};

export default connect(mapStateToProps, { selectSong })(SongList);
