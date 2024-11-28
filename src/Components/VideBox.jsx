import React, { useState } from "react";

const VideoBox = () => {
  const [videoSrc, setVideoSrc] = useState(null);

  // Handle video file input
  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file); // Create a temporary URL for the video
      setVideoSrc(url);
    }
  };

  return (
    <div className="video-container w-full">
      <h2>Video Box</h2>

      {/* File Input for Video Upload */}
      <input
        type="file"
        accept="video/*"
        onChange={handleVideoUpload}
        style={{ marginBottom: "20px" }}
      />

      {/* Video Display */}
      {videoSrc ? (
        <video
          controls
          width="600" // Adjust the size as needed
          style={{ border: "2px solid #ccc", borderRadius: "8px" }}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <p>No video selected. Please upload a video.</p>
      )}
    </div>
  );
};

export default VideoBox;
