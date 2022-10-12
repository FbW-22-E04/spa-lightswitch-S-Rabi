import { useState } from "react";
import "./Room.css";
function Room() {
  const [LightOn, setLightOn] = useState(true);

  const lightHandler = () => {
    setLightOn(!LightOn);
  };
  return (
    <div className={`room ${LightOn === true ? "lit" : "dark"}`}>
      <button onClick={lightHandler}>Light Switch </button>

      {LightOn === true ? <p>The Room is lite</p> : <p>The Room is dark</p>}
    </div>
  );
}

export default Room;
