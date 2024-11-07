import MainComponent from "./components/MainComponent";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <MainComponent />
    </div>
  );
}

export default App;
