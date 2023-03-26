import "../src/Styles/app.css"
import Common from "./Layout/Common";
import Application from "./Pages/ApplicationWrite/Application";
function App() {
  return (
    <div className="app">
      <Common Body={Application}/>
    </div>
   
  );
}

export default App;
