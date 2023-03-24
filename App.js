import logo from "./logo.svg";
import "./App.css";
import Application from "./Pages/Application";
import Common from "./Layout/Common";

function App() {
  return (
    <div className="App">
      <Common Body={Application} />
    </div>
  );
}

export default App;
