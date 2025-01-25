import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Dashboard from "../src/components/Dashboard.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Profile from "./components/Profile.jsx";
import View from "./components/View.jsx";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

//admin
import Sell from "./components/admin/Sell.jsx";
import AdminLogin from "./components/admin/AdminLogin.jsx";
import AdminDashboard from "./components/admin/AdminDashboard.jsx";

// A separate component for content that depends on the router
function AppContent() {
  const location = useLocation();
  const excludeNavbarPaths = ["/login", "/register", "/adminLogin"];

  const showNavbar = !excludeNavbarPaths.includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/view" element={<View />} />
        <Route path="/profile" element={<Profile />} />

        {/* admin */}
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
      </Routes>

      {showNavbar && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent /> {/* AppContent is now inside the Router */}
    </Router>
  );
}

export default App;
