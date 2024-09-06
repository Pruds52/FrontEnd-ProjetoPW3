import styles from "./Select.module.css";

function Select({ name, text }) {
  return (
    
    <div className={styles.form_control}>

      <label htmlFor={name}>{text}</label>
      <select name={name} id={name}>
        <option value="">Selecione uma categoria</option>
        <option value="">Ficção científica</option>
        <option value="">Fantasia heróica</option>
        <option value="">Suspense</option>
        <option value="">Terror</option>
      </select>

    </div>
  );
}

export default Select;
