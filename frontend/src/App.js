import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardUser from "./pages/user/DashboardUser";
import RegisterUser from "./pages/user/RegisterUser";
import { RegisterAdmin } from "./pages/admin/RegisterAdmin";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import { Contact } from "./pages/user/Contact";
import DashboardAdmin from "./pages/admin/DashboardAdmin";
import Videos from "./components/videos/VideosList";
import Tales from "./components/tales/TalesList";
function App() {
  return (
    <>
      <Router>
        <div className="container">
          <NavBar />
          <Routes>
            <Route path="/" element={<RegisterUser />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboardUser" element={<DashboardUser />} />
            <Route path="/registerAdmin" element={<RegisterAdmin />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboardAdmin" element={<DashboardAdmin />} />
            <Route path="/registerUser" element={<RegisterUser />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/tales" element={<Tales />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
