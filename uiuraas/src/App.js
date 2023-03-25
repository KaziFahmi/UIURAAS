import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/SideMenu/Sidebar";
import Login from "./Pages/Login/Login";
import "../src/Styles/app.css"
import Footer from "./Components/Footer/Footer.js";
function App() {
  return (
    <div className="app">
      {/* <Navbar />
      <Sidebar/> */}
      <div className="container">
        <Login/>
        
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </div>
   
  );
}

export default App;
