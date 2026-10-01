import styles from "./Navbar.module.css"

//components
import {NavLink, Link} from "react-router-dom"
import {BsSearch, BsHouseDoorFill, BsFillPersonFill, BsFillCameraFill} from "react-icons/bs"

const Navbar = () =>  {
  return (
    <nav id={styles.nav}>
        <Link to="/"> ReactGram</Link>
        <form id={styles.searchform}>
            <BsSearch />
            <input type="text" placeholder="Pesquisar" />
        </form>
        <ul id={styles.navlinks}>
            <li>
                <NavLink to="/">
                <BsHouseDoorFill />
            </NavLink>
            </li>
            <li>
                <NavLink to="/login">Entrar</NavLink>
            </li>
            <li>
                <NavLink to="/register">Cadastrar</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
