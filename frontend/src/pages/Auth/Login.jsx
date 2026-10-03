import styles from "./Auth.module.css" 

// components
import { Link } from "react-router-dom"
import message from "../../utils/message"

// hooks
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

//redux
import { login, reset } from "../../slices/authSlice"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()
  const { loading, error } = useSelector((state) => state.auth)

  const handleSubmit = (e) => {
    e.preventDefault()

    const user  = {
      email,
      password
    }
    dispatch(login(user))
  }

  // clean all auth states 
  useEffect(() => {
    dispatch(reset())
  }, [dispatch])

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
        {!loading && <input type="submit" value="Cadastrar"/>}
        {loading && <input type="submit" value="Aguarde..." disabled/>}
        {error && <Message msg={error} type="error"/>}
      </form>
      <p>
        Não tem conta? <Link to="/register">Clique aqui</Link>
      </p>
    </div>
  )
}

export default Login
