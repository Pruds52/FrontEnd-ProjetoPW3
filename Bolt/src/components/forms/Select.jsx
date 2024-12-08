import styles from "./Select.module.css";

function Select({ name, text, options, handlerChangeGenero, value }) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}</label>
      <select name={name} id={name} onChange={handlerChangeGenero} value={value}>
        <option value={""}>Selecione um gênero</option>
        {options.map((option) => {
          return (
            <option value={option.GeneroId} key={option.GeneroId}>
              {option.GeneroNome}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Select;
