import styles from "./Select.module.css";

function Select({ name, text }) {
  return (
    
    <div className={styles.form_control}>

      <label htmlFor={name}>{text}</label>
      <select name={name} id={name}>
        <option value="">Selecione um gênero</option>
        <option value="">Ação</option>
        <option value="">Aventura</option>
        <option value="">RPG</option>
        <option value="">Terror</option>
        <option value="">FPS</option>
      </select>

    </div>
  );
}

export default Select;
