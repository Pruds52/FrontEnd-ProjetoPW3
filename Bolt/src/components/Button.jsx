import { Link } from "react-router-dom";
import style from "./Button.module.css";

const Button = ({ label, router, jogoId }) => {
  return (
    <div className={style.buttonContainer}>
      <Link to={`${router}${jogoId}`}>
        <button>{label}</button>
      </Link>
    </div>
  );
};

export default Button;
