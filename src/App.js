import "./App.css";
import { useState, useCallback, useEffect } from "react";
import Landing from "./components/landing";
import CustomCursor from "./components/customCursor";
import Impunity from "./components/impunity";

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorWidth, setCursorWidth] = useState(40);

  const handleMouseMove = useCallback(
    (event) => {
      const { clientX, clientY } = event;
      setMousePos({ x: clientX, y: clientY });
    },
    [setMousePos]
  );

  const handleMouseOver = useCallback(
    (event) => {
      setCursorWidth(41);
      //console.log('Hovered');
    },
    [setCursorWidth]
  );

  const handleMouseOut = useCallback(
    (event) => {
      setCursorWidth(40);
      //console.log('Out')
    },
    [setCursorWidth]
  );

  return (
    <div className="App" onMouseMove={handleMouseMove}>
      {/* <CustomCursor mousePos={mousePos} cursorWidth={cursorWidth} />
      <Landing
        handleMouseOver={handleMouseOver}
        handleMouseOut={handleMouseOut}
      /> */}
      
      <Impunity/>
       
    </div>
  );
}

export default App;
