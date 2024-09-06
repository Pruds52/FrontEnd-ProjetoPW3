import { Outlet, Link } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <>
      <nav className={style.navbar}>
        <ul className={style.list}>
          <li className={style.item}>
            <img className={style.logo} src="./book.png" />
          </li>
          <Link to="/">
            <li className={style.item}>Home</li>
          </Link>
          <Link to="/createUser">
            <li className={style.item}>Cadastrar Usuário</li>
          </Link>
          <Link to="/gamesList">
            <li className={style.item}>Jogos</li>
          </Link>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
