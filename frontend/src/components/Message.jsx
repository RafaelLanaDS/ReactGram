import styles from "./Message.module.css"

const Message = ({msg, type}) => {
    return (
        <div className={`message ${type}`}>
            <p>{msg}</p>
        </div>
    )
}