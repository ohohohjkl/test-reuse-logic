/* eslint-disable react-hooks/rules-of-hooks */
import { useReuseCountLogic } from "./reuse-resource/useReuseCountLogic";

export const CustomCounter1 = () => {
  const [count, handleIncrement, handleDecrement] = useReuseCountLogic();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: 10,
        background: "gray",
      }}
    >
      <button onClick={handleIncrement}>increase</button>
      <button onClick={handleDecrement}>decrease</button>
      <div style={{ color: "white" }}>{count}</div>
    </div>
  );
};
