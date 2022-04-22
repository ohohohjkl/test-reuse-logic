/* eslint-disable react-hooks/rules-of-hooks */
import { BaseCounter, CustomCounter1, CustomCounter2 } from "./test-logic";

function App() {
  return (
    <div className="App">
      <BaseCounter />
      <CustomCounter1 />
      <CustomCounter2 />
    </div>
  );
}

export default App;
