
import './App.css';
import { Parallax } from "react-parallax";
import Retro from "./images/retro.jpg";
import Solnedgang from "./images/solnedgang i Larvik.jpg";
import Sommer from "./images/sommer - Larvik.jpg";

function App() {
  return (
    <div className="App">
      <Parallax strength={300} bgImage={Retro}>
        <div className="content">
          <div className="text-content">Normal Parallax</div>
        </div>
      </Parallax>

      <Parallax strength={300} blur={2} bgImage={Sommer}>
        <div className="content">
          <div className="text-content">Blur</div>
        </div>
      </Parallax>

      <Parallax strength={-600} bgImage={Solnedgang}>
        <div className="content">
          <div className="text-content">Reverse Parallax</div>
        </div>
      </Parallax>

      <div className="content"></div>
    </div>
  );
}

export default App;
