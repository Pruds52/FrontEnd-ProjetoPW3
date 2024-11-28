import React from 'react';
import style from './CardDetailGame.module.css';

const CardDetailGame = ({ titulo, desenvolvedora, descricao, imagem }) => {
  return (
    <div className={style.cardContainer}>
      <img src={imagem} alt={`Imagem do jogo ${titulo}`} className={style.imagem} />
      <h2 className={style.titulo}>{titulo}</h2>
      <h4 className={style.desenvolvedora}>{desenvolvedora}</h4>
      <p className={style.descricao}>{descricao}</p>
    </div>
  );
};

export default CardDetailGame;