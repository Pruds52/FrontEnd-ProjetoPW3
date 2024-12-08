import styles from "./Input.module.css"

function Input({ type, text, name, placeHolder, handlerChange, value }) {
    return (
        <div className={styles.form_control}>

            <label htmlFor={name}>{text}</label>
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeHolder} 
                onChange={handlerChange}
                value={value}/>

        </div>
    )
}

export default Input