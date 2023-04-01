import "../src/Styles/app.css"
import Common from "./Layout/Common";
import Application from "./Pages/ApplicationWrite/Application";
import Login from "./Pages/Login/Login";
import ApplicationInbox from "./Components/ApplicationInbox/ApplicationInbox";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/application" element={<Application />} />
          <Route path="/inbox" element={<ApplicationInbox />} />
          <Route path="/" element={<Common />} />
        </Routes>
      </Router>
    </div>
   
  );
}

export default App;
