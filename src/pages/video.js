import React, { useRef, useState } from "react";
import VideoFooter from "./components/footer/VideoFooter";
import "./video.css";

function Video() {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handdleStart() {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handdleStart}
        loop
        src="https://firebasestorage.googleapis.com/v0/b/videos-meire.appspot.com/o/Snapinsta.app_video_584DA83FFE9D8B2941BDD9C80AB966B4_video_dashinit.mp4?alt=media&token=d8cf4d16-65fd-45e8-919a-433cc1692e0e"
      ></video>
      {/* Side bar */}
      <VideoFooter />
    </div>
  );
}

export default Video;
