import styles from "./Navbar.module.css"

//components
import {NavLink, Link} from "react-router-dom"
import {BsSearch, BsHouseDoorFill, BsFillPersonFill, BsFillCameraFill} from "react-icons/bs"

const Navbar = () =>  {
  return (
    <nav id={styles.navbar}>
        <Link to="/">
            <h2>ReactGram</h2>
            <form>
                <BsSearch />
                <input type="text"/>
            </form>
            <ul id="nav-links">
                <NavLink to="/">
                    <BsHouseDoorFill />
                </NavLink>
                <NavLink to="/login">Entrar</NavLink>
                <NavLink to="/register">Registrar</NavLink>
            </ul>
        </Link>
    </nav>
  )
}

export default Navbar
