import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/SideMenu/Sidebar";
import Login from "./Pages/Login/Login";
function App() {
  return (
    <div>
      {/* <Navbar />
      <Sidebar/> */}
      <div className="container">
        <Login/>
      </div>
    </div>
   
  );
}

export default App;
