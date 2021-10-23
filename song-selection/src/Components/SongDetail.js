import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ selectedSong }) => {
  if (selectedSong) {
    return (
      <div>
        <div>
          <p>Title: {selectedSong.title}</p>
          <p>Length: {selectedSong.length}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Select A Song</h3>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    selectedSong: state.selectedSong,
  };
};

export default connect(mapStateToProps)(SongDetail);
