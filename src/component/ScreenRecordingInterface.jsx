import { ReactMediaRecorder } from "react-media-recorder";
import { Video, CircleStop } from "lucide-react";

export const ScreenRecordingInterface = () => {
  return (
    <ReactMediaRecorder
      screen
      mimeType="video/webm"
      render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
        <div className="w-full rounded-lg overflow-hidden shadow-lg m-auto p-8 mt-10 border-2 border-rose-200">
          <p className="text-center text-2xl text-rose-800">
            Enregistrez votre écran
          </p>
          <div className="flex justify-center items-center mt-8">
            {status === "idle" && (
              <div className="flex justify-center">
                <button onClick={startRecording} className="flex items-center">
                  <Video className="text-rose-600 size-10" />
                </button>
              </div>
            )}
            {status === "recording" && (
              <div className="flex justify-center">
                <button onClick={stopRecording} className="flex items-center">
                  <CircleStop className="text-rose-600 size-10" />
                </button>
              </div>
            )}
            {status === "stopped" && (
              <div className="text-center">
                <video
                  src={mediaBlobUrl}
                  controls
                  autoPlay
                  loop
                  className="mb-4"
                />
                <a
                  href={mediaBlobUrl}
                  download="recording.webm"
                  className="bg-rose-500 text-white px-4 py-2 rounded"
                >
                  Télécharger la vidéo
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    />
  );
};
