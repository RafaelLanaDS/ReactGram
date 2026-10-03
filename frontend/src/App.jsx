import "./App.css"

//router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

//hooks
import { useAuth } from "../hooks/useAuth"

//components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

//Pages
import Home from "./pages/Home/Home"
import Register from "./pages/Auth/Register"
import Login from "./pages/Auth/Login"

function App() {
  const { auth, loading} = useAuth()
  if (loading) {
    return <h1>Loading...</h1>
  }
  if (!auth) {
    return <Navigate to="/login" />
  }

  return (
      <div className='app'>
        <BrowserRouter>
          <Navbar />
            <div className="container">
              <Routes>
                <Route 
                  path="/" 
                  element={auth ? <Home /> : <Navigate 
                  to="/login" />} />
                <Route 
                  path="/login" 
                  element={auth ? <Login /> : <Navigate 
                  to="/" />} />
                <Route 
                  path="/register" 
                  element={auth ? <Register /> : <Navigate 
                  to="/login" />} />
              </Routes>
            </div>
          <Footer />
        </BrowserRouter>
      </div>
  )

}

export default App
