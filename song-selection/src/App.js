import React from "react";
import SongList from "./Components/SongList";
import SongDetail from "./Components/SongDetail";

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="ui column eight wide">
          <SongList />
        </div>
        <SongDetail />
      </div>
    </div>
  );
};

export default App;
