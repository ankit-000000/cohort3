import { useState, useEffect } from "react";

// conditional rendering
function App() {
  const [counterVisible, setCounterVisible] = useState(true);

  useEffect(function () {
    setInterval(function () {
      setCounterVisible((c) => !c);
    }, 5000);
  }, []);

  return (
    <div>
      {counterVisible ? <Counter></Counter> : null}
      {counterVisible && <Counter></Counter>}
    </div>
  );
}
// mounting, re-rendering, unmounting
function Counter() {
  const [count, setCount] = useState(0);

  console.log("counter");

  useEffect(function () {
    let clock = setInterval(function () {
      console.log("on mount");

      setCount((count) => count + 1);
    }, 1000);
    return function () {
      console.log("unmount");
      clearInterval(clock);
    };
  }, []); // dependency array, cleanup, fetch inside useEffect

  function increaseCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1 id="text">{count}</h1>
      <button onClick={increaseCount}>Increase count</button>
    </div>
  );
}

export default App;
