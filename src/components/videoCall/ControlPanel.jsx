import React from "react";
import {
  Video,
  VideoOff,
  Mic,
  MicOff,
  PhoneOff,
  MessageSquareText,
  Users,
  Expand,
  Shrink,
  Link,
} from "lucide-react";

const ControlPanel = ({
  room,
  isVideoOn,
  isAudioOn,
  showChat,
  onToggleVideo,
  onToggleAudio,
  onToggleChat,
  onLeave,
  participantCount,
  fullScreen,
  onToggleFullScreen,
}) => {
  return (
    <div className="control-panel">
      <div className="control-group primary-controls">
        <button
          className={`control-button ${isAudioOn ? "active" : "inactive"}`}
          onClick={onToggleAudio}
          title={isAudioOn ? "Mute microphone" : "Unmute microphone"}
        >
          {isAudioOn ? <Mic /> : <MicOff />}
        </button>

        <button
          className={`control-button ${isVideoOn ? "active" : "inactive"}`}
          onClick={onToggleVideo}
          title={isVideoOn ? "Turn off camera" : "Turn on camera"}
        >
          {isVideoOn ? <Video /> : <VideoOff />}
        </button>

        <button
          className="control-button leave-button"
          onClick={onLeave}
          title="Leave conference"
        >
          <PhoneOff />
        </button>
        <button
          className="control-button"
          onClick={onToggleFullScreen}
          title={fullScreen ? "Shrink" : "Expand"}
        >
          {fullScreen ? <Shrink /> : <Expand />}
        </button>
        <button
          className="control-button"
          onClick={() => {
            const url = `https://web-rtc-neon.vercel.app/${room}`;
            navigator.clipboard.writeText(url).then(() => {
              alert("Room link copied to clipboard!");
            }).catch(() => {
              alert("Failed to copy room link.");
            });
          }}
          title="Copy room link"
        >
          <Link />
        </button>

      </div>

      <div className="control-group secondary-controls">
        <button
          className={`control-button ${showChat ? "active" : ""}`}
          onClick={onToggleChat}
          title="Toggle chat"
        >
          <MessageSquareText />
        </button>

        <div className="participant-counter">
          <Users />
          {participantCount}
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
