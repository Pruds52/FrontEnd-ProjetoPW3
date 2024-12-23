import { Outlet, Link } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <>
      <nav className={style.navbar}>
        <ul className={style.list}>
          <li className={style.item}>
            <img className={style.logo} src="./logo.webp" alt="Logo" />
          </li>
          <Link to="/">
            <li className={style.item}>Home</li>
          </Link>
          <Link to="/createGame">
            <li className={style.item}>Cadastrar Jogo</li>
          </Link>
          <Link to="/gamesList">
            <li className={style.item}>Lista de Jogos</li>
          </Link>
        </ul>
        <Link to="/createUser">
          <p className={style.createUserBtn}>Cadastre-se</p>
        </Link>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
