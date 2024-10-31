import style from "./CardGames.module.css";

const CardGames = ({ titulo, desenvolvedora, descricao, jogoId }) => {
  return (
    <div className={style.cardGame}>
      <h2 className={style.titulo}>{titulo}</h2>
      <h3 className={style.desenvolvedora}>{desenvolvedora}</h3>
      <p className={style.descricao}>{descricao}</p>
    </div>
  );
};

export default CardGames;
