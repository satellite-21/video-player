// React can also be used to work with the HTML 
// video element and toggle between different videos.


import React, { useState } from "react";
import ReactDOM from "react-dom";

const VideoPlayer = () => {
  const videos = {
    deer:
      "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
    snail:
      "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
    cat:
      "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
    spider:
      "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4"
  };

  const [selectedAnimal, setSelectedAnimal] = useState("");

  const handleAnimalChange = (event) => {
    setSelectedAnimal(event.target.value);
    console.log(event.target.value)
  };

  return (
    <div>
      <h1>Project 6: Video Player</h1>
      <div className="radioboxes">
        {/* Creating the radio boxes */}
        {Object.keys(videos).map((animal) => (
          <label key={animal}>
            <input
              type="radio"
              value={animal}
              checked={selectedAnimal === animal}
              onChange={handleAnimalChange}     
            />
            {animal}
          </label>
        ))}
      </div>
      {/* Rendering the selected video */}
      {selectedAnimal && (
        <video src={videos[selectedAnimal]} controls width="400" height="300" />
      )}
    </div>
  );
};

ReactDOM.render(<VideoPlayer />, document.getElementById("root"));
