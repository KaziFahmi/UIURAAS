import "../src/Styles/app.css"
import Common from "./Layout/Common";
import Application from "./Pages/ApplicationWrite/Application";
import Login from "./Pages/Login/Login";
function App() {
  return (
    <div className="app">
      <Login/>
      {/* <Common Body={Application}/> */}
    </div>
   
  );
}

export default App;
