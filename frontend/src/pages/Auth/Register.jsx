import styles from "./Auth.module.css" 

//components
import { Link } from "react-router-dom"

//hooks
import { useState, useEffect } from "react"  

const Register = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div id={styles.register}>
      <h1>Register</h1>
      <p className={styles.subtitle}>Cadstre-se para ver fotos e vídeos do seu amigo.</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <input type="password" placeholder="Confirmação de senha" />
        <input type="submit" value="Cadastrar" />
      </form>
      <p>Já tem conta? <Link to="/login">Clique aqui</Link></p>
    </div>
  )
}

export default Register
