import Common from "./Layout/Common";
import Application from "./Pages/ApplicationWrite/Application";
import Login from "./Pages/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ApplicationRead from "./Pages/ApplicationRead/ApplicationRead";
import EmailPage from "./Pages/EmailPage/EmailPage";
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/application" element={<Application />} />
          <Route path="/applicationread" element={<ApplicationRead />} />
          <Route path="/inbox" element={<EmailPage />} />
          <Route path="/" element={<Common />} />
        </Routes>
      </Router>
    </div>
   
  );
}

export default App;
