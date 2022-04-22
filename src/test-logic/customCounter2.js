import { useEffect, useRef } from "react";
import { useReuseCountLogic } from "./reuse-resource/useReuseCountLogic";

export const CustomCounter2 = () => {
  const [count, handleIncrement, handleDecrement] = useReuseCountLogic();

  const intervalRef = useRef(null);

  useEffect(() => {
    return () => stopCounter(); // when App is unmounted we should stop counter
  }, []);

  const startCounter = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => handleIncrement(), 150);
  };

  const stopCounter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: 10,
        background: "blue",
      }}
    >
      <button
        onMouseDown={startCounter}
        onMouseUp={stopCounter}
        onMouseLeave={stopCounter}
        onClick={handleIncrement}
      >
        increase
      </button>
      <button onClick={handleDecrement}>decrease</button>
      <div style={{ color: "yellow" }}>{count}</div>
    </div>
  );
};
