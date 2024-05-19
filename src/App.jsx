import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Navbar from "./components/Header/Navbar";
import authService from "./Appwrite/auth";
import { login, logout } from "./Store/authSlice";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Loader from "./components/Loader/Loader";

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

  return (
      <div className=" app flex flex-col min-h-screen">
        <Navbar />
        <main className="flex justify-center flex-grow">
        {!loading ? <Outlet/> : <Loader/>}
        </main>
        <Footer />
      </div>
  ) 
}

export default App;
