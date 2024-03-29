import PrimaryLayout from "./Layout/PrimaryLayout";
import Application from "./Pages/ApplicationWrite/Application";
import Login from "./Pages/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ApplicationRead from "./Pages/ApplicationRead/ApplicationRead";
import ProfilePage from "./Pages/Profile/ProfilePage";
import "bootstrap/dist/css/bootstrap.min.css";
import ProtectedRoute from "./Components/ProtectedRoute";
import HomePage from "./Pages/Homepage/HomePage";
import Group from "./Pages/Group/Group";
import EditProfile from "./Pages/Profile/EditProfile";
import AdminPanel from "./Pages/AdminPanel/AdminPanel";

function App() {
  return (
    <div className="app" style={body}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* Temporary setup */}
          {/* <Route path="/application" element={<PrimaryLayout body={<Application/>}/>} />
          <Route path="/applicationread" element={<PrimaryLayout body={<ApplicationRead/>}/>} />
          <Route path="/inbox" element={<PrimaryLayout body={<EmailPage/>}/>} />
          <Route path="/profile" element={<PrimaryLayout body={<ProfilePage/>}/>} />
          <Route path="/home" element={<PrimaryLayout body={<HomePage/>}/>} />
          <Route path="/group" element={<PrimaryLayout body={<Group/>}/>} />
          <Route path="/editprofile" element={<PrimaryLayout body={<EditProfile />}/>} />
          <Route path="/adminpanel" element={<PrimaryLayout body={<AdminPanel />}/>} />
          <Route path="/" element={<PrimaryLayout/>} /> */}
           {/* Temporary setup */}
           
          {/* Permanent setup */}
          <Route element={<ProtectedRoute />}>
            <Route path="/application" element={<PrimaryLayout body={<Application/>}/>} />
            <Route path="/applicationread" element={<PrimaryLayout body={<ApplicationRead/>}/>} />
            {/* <Route path="/profile" element={<PrimaryLayout body={<ProfilePage/>}/>} /> */}
            <Route path="/profile/:id" element={<PrimaryLayout body={<ProfilePage/>}/>} />
            <Route path="/home" element={<PrimaryLayout body={<HomePage/>}/>} />
            <Route path="/group" element={<PrimaryLayout body={<Group/>}/>} />
            <Route path="/editprofile" element={<PrimaryLayout body={<EditProfile />}/>} />
            <Route path="/adminpanel" element={<PrimaryLayout body={<AdminPanel />}/>} />
            <Route path="/" element={<PrimaryLayout/>} />
          </Route>
          {/* Permanent setup */}
        </Routes>
      </Router>
    </div>
   
  );
}

export default App;

const body={
  fontFamily: "'Inder', sans-serif",
}
