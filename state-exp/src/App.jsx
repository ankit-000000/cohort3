// import { useState } from "react";

// function App() {
//   return (
//     <div>
//       <LightBulb />
//     </div>
//   );
// }

// function LightBulb() {
//   const [lightOn, setlightOn] = useState(true);
//   return (
//     <div>
//       <BulbState lightOn={lightOn} />
//       <ToggleBulbState setLightOn={setlightOn} lightOn={lightOn} />
//     </div>
//   );
// }

// function BulbState(lightOn) {
//   return (
//     <div>
//       <p>{lightOn ? "Light is On" : "Light is Off"}</p>
//     </div>
//   );
// }
// function ToggleBulbState({ setlightOn, lightOn }) {
//   function Toggle() {
//     setlightOn(!lightOn);
//   }
//   return (
//     <div>
//       <button onClick={Toggle}>Toggle</button>
//     </div>
//   );
// }

// export default App;
// kirat code
// import { useState } from "react";
// import "./App.css";

// function App() {
//   return (
//     <div>
//       <LightBulb />
//     </div>
//   );
// }

// function LightBulb() {
//   const [bulbOn, setBulbOn] = useState(true);

//   return (
//     <div>
//       <BulbState bulbOn={bulbOn} />
//       <ToggleBulbState bulbOn={bulbOn} setBulbOn={setBulbOn} />
//     </div>
//   );
// }

// function BulbState({ bulbOn }) {
//   return <div>{bulbOn ? "Bulb on" : "Bulb off"}</div>;
// }

// function ToggleBulbState({ bulbOn, setBulbOn }) {
//   function toggle() {
//     // setBulbOn(currentState => !currentState)
//     setBulbOn(!bulbOn);
//   }

//   return (
//     <div>
//       <button onClick={toggle}>Toggle the bulb</button>
//     </div>
//   );
// }

// export default App;

// context api code
// import { createContext, useContext, useState } from "react";
// import "./App.css";

// const BulbContext = createContext();
// function App() {
//   const [bulbOn, setBulbOn] = useState(true);
//   return (
//     <div>
//       <BulbContext.Provider
//         value={{
//           bulbOn: bulbOn,
//           setBulbOn: setBulbOn,
//         }}
//       >
//         <Light />
//       </BulbContext.Provider>
//     </div>
//   );
// }

// function Light() {
//   return (
//     <div>
//       <BulbState />
//       <ToggleBulbState />
//     </div>
//   );
// }

// function BulbState() {
//   const { bulbOn } = useContext(BulbContext);
//   return <div>{bulbOn ? "Bulb on" : "Bulb off"}</div>;
// }

// function ToggleBulbState() {
//   const { bulbOn, setBulbOn } = useContext(BulbContext);
//   function toggle() {
//     // setBulbOn(currentState => !currentState)
//     setBulbOn(!bulbOn);
//   }

//   return (
//     <div>
//       <button onClick={toggle}>Toggle the bulb</button>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import "./App.css";

function BulbProvider({ children }) {
  return (
    <BulbContext.Provider value={useState(true)}>
      {children}
    </BulbContext.Provider>
  );
}

function App() {
  return (
    <div>
      <LightBulb />
    </div>
  );
}

function LightBulb() {
  const [bulbOn, setBulbOn] = useState(true);

  return (
    <div>
      <BulbState bulbOn={bulbOn} />
      <ToggleBulbState bulbOn={bulbOn} setBulbOn={setBulbOn} />
    </div>
  );
}

function BulbState({ bulbOn }) {
  return <div>{bulbOn ? "Bulb on" : "Bulb off"}</div>;
}

function ToggleBulbState({ bulbOn, setBulbOn }) {
  function toggle() {
    // setBulbOn(currentState => !currentState)
    setBulbOn(!bulbOn);
  }

  return (
    <div>
      <button onClick={toggle}>Toggle the bulb</button>
    </div>
  );
}

export default App;
