import style from "./CardGames.module.css";
import Button from "./Button";

const CardGames = ({ titulo, desenvolvedora, jogoId, imagem }) => {
  return (
    <div className={style.cardGame}>
      <h1 className={style.titulo}>{titulo}</h1>
      <h3 className={style.desenvolvedora}>{desenvolvedora}</h3>
      <img src={imagem} alt={`Imagem do jogo ${titulo}`} className={style.imagem}/>
      <Button label="Detalhes" router={`/DetailGame/${jogoId}`} cod_livro={jogoId} />
    </div>
  );
};

export default CardGames;
