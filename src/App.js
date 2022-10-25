import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Shared/Footer";
import Navbar from "./components/Shared/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Locations from "./pages/Locations";
import Products from "./pages/Products";
import PrivateRoute from "./components/Shared/PrivateRoute";
import useAuthCheck from "./hooks/useAuthCheck";
import Profile from "./pages/Profile";
import Properties from "./pages/Properties";

function App() {
  const authCheck = useAuthCheck();
  return !authCheck ? (
    <div>Checking Authentication...</div>
  ) : (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/properties" element={<Properties />} />
        <Route
          path="/locations"
          element={
            <PrivateRoute>
              <Locations />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
