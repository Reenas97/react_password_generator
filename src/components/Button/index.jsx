import styles from "./styles.module.css"

export default function Button(props){
    return(
        <button onClick={props.function} className={styles.button}>{props.buttonName}</button>
    )
}