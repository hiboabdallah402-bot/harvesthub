import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Crops from "./pages/Crops";
import AddCrop from "./pages/AddCrop";
import EditCrop from "./pages/EditCrop";
import Login from "./pages/Login";

function RequireAuth({ children }) {
  const isAuthenticated = localStorage.getItem("harvesthub_auth") === "true";
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/dashboard"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
            <Route
              path="/crops"
              element={
                <RequireAuth>
                  <Crops />
                </RequireAuth>
              }
            />
            <Route
              path="/crops/add"
              element={
                <RequireAuth>
                  <AddCrop />
                </RequireAuth>
              }
            />
            <Route
              path="/crops/edit/:id"
              element={
                <RequireAuth>
                  <EditCrop />
                </RequireAuth>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
