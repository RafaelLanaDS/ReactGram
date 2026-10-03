import styles from "./Navbar.module.css"

//components
import {NavLink, Link} from "react-router-dom"
import {BsSearch, BsHouseDoorFill, BsFillPersonFill, BsFillCameraFill} from "react-icons/bs"

//hooks
import { useState} from "react"
import { useAuth } from "../hooks/useAuth"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"


const Navbar = () =>  {
    const {auth} = useAuth()
    const {user} = useSelector((state) => state.auth)

    return (
        <nav id={styles.nav}>
            <Link to="/"> ReactGram</Link>
            <form id={styles.searchform}>
                <BsSearch />
                <input type="text" placeholder="Pesquisar"/>
            </form>
            <ul id={styles.navlinks}>
                {auth ? (
                    <>
                        <li>
                            <NavLink to="/">
                                <BsHouseDoorFill />
                            </NavLink>
                        </li>
                        {user && (
                            <li>
                                <NavLink to={`/users/${user._id}`}>
                                    <BsFillCameraFill />
                                </NavLink>
                            </li>
                        )}
                        <li>
                            <NavLink to="/profile">
                                <BsFillPersonFill />
                            </NavLink>
                        </li>
                        <li>
                            <span>Sair</span>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <NavLink to="/login">Entrar</NavLink>
                        </li>
                        <li>
                            <NavLink to="/register">Cadastrar</NavLink>
                        </li>
                    </>
                )}
            </ul>
        </nav>
  )
}

export default Navbar
