import React, { useState } from "react";

import "../Styles/App.css";

import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const passPropToParent = (videos) => {
    setVideos(videos);
    setSelectedVideo(videos[0]);
  };

  return (
    <div className="ui container">
      <SearchBar passPropToParent={passPropToParent} />

      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            {selectedVideo && <VideoDetail selectedVideo={selectedVideo} />}
          </div>
          <div className="five wide column">
            <VideoList videos={videos} videoSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
