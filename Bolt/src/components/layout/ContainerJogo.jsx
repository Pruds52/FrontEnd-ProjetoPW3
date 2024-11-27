import React from 'react';
import style from './ContainerJogo.module.css';

const ContainerJogo = (props) => {
  return (
    <div className={style.container_jogo}>
      {props.children}
    </div>
  );
};

export default ContainerJogo;
