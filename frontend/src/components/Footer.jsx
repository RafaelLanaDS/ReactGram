import styles from "./Navbar.module.css"

const Footer = () => {
  return (
    <footer id={styles.footer}>
        <p>ReactGram &copy; {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer
