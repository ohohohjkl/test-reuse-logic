import { useReuseCountLogic } from "./reuse-resource/useReuseCountLogic";

export const BaseCounter = () => {
  /*
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
    setCount((prev) => prev + 1);
    };
    const handleDecrement = () => {
    setCount((prev) => prev - 1);
    };
  */
  const [count, handleIncrement, handleDecrement] = useReuseCountLogic();
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: 10 }}>
      <button onClick={handleIncrement}>increase</button>
      <button onClick={handleDecrement}>decrease</button>
      <div>{count}</div>
    </div>
  );
};
