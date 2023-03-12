import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Inc, Dec } from "./states/reducers/index";
import "./App.css";

function App() {
  const curState = useSelector((state) => state.number.value);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h2>Redux Example</h2>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <h3>{curState}</h3>
      </div>
      {/* <button onClick={() => dispatch(Inc())}>INC</button> */}
      {/* <button onClick={() => dispatch(Dec())}>DEC</button> */}
      <button aria-label="Increment value" onClick={() => dispatch(Inc(10))}>
        Increment
      </button>
      <button aria-label="Increment value" onClick={() => dispatch(Dec(5))}>
        Decrement
      </button>
    </div>
  );
}

export default App;
