import React, { useState, useEffect } from "react";
import style from "./CreateGame.module.css";
import Input from "../forms/Input";
import Select from "../forms/Select";
import Button from "../forms/Button"

const CreateGame = () => {
  const [generos, setGeneros] = useState([])
  const [jogo, setJogo] = useState({})

  function handlerChangeJogo(event) {
    setJogo({ ...jogo, [event.target.name]: event.target.value });
    console.log(jogo);
  }

  function handleChangeGenero(event) {
    setJogo({ ...jogo, GeneroId: event.target.value });
    console.log(jogo);
  }

  useEffect(() => {
    fetch("http://localhost:3333/genero", {
      method: "GET",
      header: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
    })
      .then((resp) =>
        resp.json()
      )
      .then((data) => {
        setGeneros(data)
        console.log(data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className={style.create_game_container}>

      <h1>Cadastrar Jogo</h1>

      <form className={style.forms}>

        <Input
          type="text"
          name="jogoNome"
          placeHolder="Digite o nome do jogo"
          text="Título do jogo"
          handlerChange={handlerChangeJogo}
        />

        <Input
          type="text"
          name="desenvolvedora"
          placeHolder="Digite a desenvolvedora"
          text="Nome do criador"
          handlerChange={handlerChangeJogo}
        />

        <Input
          type="text"
          name="descricao"
          placeHolder="Digite a descrição do jogo"
          text="Descrição do jogo"
          handlerChange={handlerChangeJogo}
        />

        <Select
          name="genero"
          text="Escolha um gênero de jogo"
          options={generos}
          handlerChangeGenero={handleChangeGenero}
        />

        <Button
          rotulo="Cadastrar Jogo"
        />

      </form>


    </section>
  );
};

export default CreateGame;
