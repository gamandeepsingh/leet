import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Navbar from "./components/Header/Navbar";
import authService from "./Appwrite/auth";
import { login, logout } from "./Store/authSlice";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Header/Signup";
import Login from "./components/Header/Login";
import Home from "./components/Home/Home";
import Protected from "./components/Header/AuthLayout";

function App() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="app flex flex-col min-h-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <Protected authentication={false}>
                <Login />
              </Protected>
            }
          />
          <Route
            path="/signup"
            element={
              <Protected authentication={false}>
                <Signup />
              </Protected>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;