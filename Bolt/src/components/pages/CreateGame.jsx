import React from "react";
import style from "./CreateGame.module.css";
import Input from "../forms/Input";
import Select from "../forms/Select";
import Button from "../forms/Button"

const CreateGame = () => {
  return (
    <section className={style.create_game_container}>

      <div className={style.forms}>

        <h1>Cadastrar Jogo</h1>

        <Input
          type="text"
          name="txt_livro"
          placeHolder="Digite o nome jogo"
          text="Título do jogo"
        />

        <Input
          type="text"
          name="txt_livro"
          placeHolder="Digite o nome do criador"
          text="Nome do criador"
        />

        <Input
          type="text"
          name="txt_livro"
          placeHolder="Digite a descrição do jogo"
          text="Descrição do jogo" />

        <Select
          name="categoria"
          text="Escolha um gênero de jogo"
        />

        <Button
          rotulo="Cadastrar Usuário"
        />

      </div>


    </section>
  );
};

export default CreateGame;
