import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import "./App.css";
import Iphone from "./components/Iphone/Iphone";

function App() {
  const [appBg, setAppBg] = useState("");

  return (
    <div className="App">
      {/* <ReactPlayer url="https://www.youtube.com/watch?v=pSUydWEqKwE" /> */}
      <div className="app-bg">
        <img id="appBg" src={appBg} alt="appBg" />
      </div>
      <Iphone setAppBg={setAppBg} />
    </div>
  );
}

export default App;
