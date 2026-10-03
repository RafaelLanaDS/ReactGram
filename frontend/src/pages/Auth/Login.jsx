import styles from "./Auth.module.css" 

// components
import { Link } from "react-router-dom"
import message from "../../utils/message"

// hooks
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

//redux

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div id="login">
      <h2>ReactGram</h2>
      <p className="subtitle">Faça login para continuar</p>
      <form onsubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Email"  
          onChange={(e) => setEmail(e.target.value)}  
          value = {email || ""}/>
        <input 
          type="password" 
          placeholder="Senha"  
          onChange={(e) => setPassword(e.target.value)}  
          value = {password || ""}/>
        <input type="submit" value="Entrar" />
      </form>
      <p>
        Não tem conta? <Link to="/register">Clique aqui</Link>
      </p>
    </div>
  )
}

export default Login
