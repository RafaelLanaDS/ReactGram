import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer id={styles.footer}>
        <p>ReactGram &copy; {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer
