import Footer from "./components/footer/Footer";
import Navbar from "./components/header/Navbar";
import styles from './App.module.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./components/pages/Dashboard";
import Pipeline from "./components/pages/Pipeline";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className={styles.app}>
          <Navbar />
          <div className={styles.content}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/pipeline" element={<Pipeline />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
