import React from "react";
import style from "./GamesList.module.css";
import { useState, useEffect } from "react";
import CardGame from "../CardGames";
import Container from "../layout/Container";
import ContainerJogo from "../layout/ContainerJogo"
import JogoImg from "../../assets/jogo.png"

const GamesList = () => {
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/jogo", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setJogos(data);
        console.log(jogos);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <section className={style.gamelist_container}>
        <h1>Lista de Jogos</h1>

        <ContainerJogo>
          {jogos.map((jogo) => (
            <CardGame
              jogoId={jogo.JogoId}
              imagem={JogoImg}
              titulo={jogo.JogoNome}
              key={jogo.JogoId}
            />
          ))}
        </ContainerJogo>
      </section>
    </Container>
  );
};

export default GamesList;
