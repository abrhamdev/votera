import React, { useState } from "react";
import {
  XMarkIcon
} from "@heroicons/react/24/outline";
const VideoBox = () => {
  const [videoUrl, setVideoUrl] = useState(null);

  const handleImportVideo = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoUrl(url);
    }
  };

  return (
      <>
      {videoUrl ? (
        <div className="p-10">
          <XMarkIcon className="h-6 w-6 hover:text-blue-700" onClick={()=>setVideoUrl('')}/>
        <video
          src={videoUrl}
          controls
          className="w-full rounded-lg"
        >
          Your browser does not support the video tag.
        </video>
        </div>
      ) : (
        <div className="flex items-center justify-center flex-shrink-0 h-80 w-full border-2 border-dashed border-gray-300 rounded-lg shadow-lg bg-gray-600">
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-gray-400 mb-4 text-lg">
            No video available. Please import one.
          </p>
          <label
            htmlFor="videoInput"
            className="cursor-pointer px-4 py-2  bg-blue-600 text-white rounded-md hover:bg-blue-500"
          >
            Import Video
          </label>
          <input
            id="videoInput"
            type="file"
            accept="video/*"
            onChange={handleImportVideo}
            className="hidden"
          />
        </div>
        </div>
      )}
    </>
  );
};

export default VideoBox;
