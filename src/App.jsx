import "./App.css";

import { ScreenRecordingInterface } from "./component/ScreenRecordingInterface";

function App() {
  return (
    <>
      <div className="mx-8 my-8">
        <h1 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-8 uppercase text-center">
          Screen Video
        </h1>
        <ScreenRecordingInterface />
      </div>
    </>
  );
}

export default App;
