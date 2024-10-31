import style from "./CardGames.module.css";

const CardGames = ({ titulo, desenvolvedora, descricao, jogoId }) => {
  return (
    <div className={style.cardGame}>
      <h1 className={style.titulo}>{titulo}</h1>
      <h3 className={style.desenvolvedora}>{desenvolvedora}</h3>
      <br />
      <p className={style.descricao}>{descricao}</p>
    </div>
  );
};

export default CardGames;
