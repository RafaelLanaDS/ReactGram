import "./App.css"

//router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

//hooks
import { useAuth } from "./hooks/useAuth"

//components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

//Pages
import Home from "./pages/Home/Home"
import Register from "./pages/Auth/Register"
import Login from "./pages/Auth/Login"
import EditProfile from "./pages/EditProfile/EditProfile"

function App() {
  const { auth, loading} = useAuth()

  return (
      <BrowserRouter>
        <div className='app'>
          <Navbar />
            <div className="container">
              {loading ? (
                <h1>Loading...</h1>
              ) : (
                <Routes>
                  <Route 
                    path="/" 
                    element={auth ? <Home /> : <Navigate to="/login" />} />
                  <Route 
                    path="/edit" 
                    element={auth ? <EditProfile /> : <Navigate to="/login" />} />
                  <Route 
                    path="/login" 
                    element={auth ? <Navigate to="/" /> : <Login />} />
                  <Route 
                    path="/register" 
                    element={auth ? <Navigate to="/" /> : <Register />} />
                </Routes>
              )}
            </div>
          <Footer />
        </div>
      </BrowserRouter>
  )

}

export default App
