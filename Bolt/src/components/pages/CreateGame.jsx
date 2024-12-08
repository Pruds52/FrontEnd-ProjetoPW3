import React, { useState, useEffect, useSyncExternalStore } from "react";
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
    setJogo({ ...jogo, generoId: event.target.value });
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


  function cadastrarJogo(jogo) {

    console.log(JSON.stringify(jogo))

    fetch('http://localhost:3333/jogo', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*'
      },
      body: JSON.stringify(jogo)
    })
      .then(
        (resp) => resp.json()
      )
      .then(
        (data) => {
          console.log(data);
        }
      )
      .catch(
        (err) => { console.log(err) }
      )
  }

  function submit(event) {
    event.preventDefault();
      cadastrarJogo(jogo);
  }


  return (
    <section className={style.create_game_container}>

      <div className={style.forms}>

        <h1>Cadastrar Jogo</h1>

        <form onSubmit={submit}>
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
            text="Desenvolvedora"
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

      </div>


    </section>
  );
};

export default CreateGame;
