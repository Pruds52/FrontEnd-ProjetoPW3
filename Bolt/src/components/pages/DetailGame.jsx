import React, { useState, useEffect } from "react";
import style from "./DetailGame.module.css";
import { useParams } from "react-router-dom";
import CardDetailGame from "../CardDetailGame";
import { useNavigate } from "react-router-dom";
import Container from "../layout/Container";
import ContainerJogo from "../layout/ContainerJogo";
import JogoImg from "../../assets/jogo.png"

const DetailGame = () => {
    const { jogoId } = useParams();
    const [jogo, setJogo] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:3333/jogo/${jogoId}`, {
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
                setJogo(data[0]);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [jogoId]);

    function deletarJogo() {

        fetch(`http://localhost:3333/jogo/${jogoId}`, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*'
            },
        })
            .then(
                (resp) => resp.json()
            ).then(
                navigate("/gamesList")
            )
            .catch(
                (err) => { console.log(err) }
            )
    }

    return (
        <Container>
            <section className={style.game_container}>
                <h1 className={style.pageTitle}>Detalhes do Jogo</h1>
                <ContainerJogo>
                    <div className={style.cardContent}>
                        <CardDetailGame
                            titulo={jogo.JogoNome}
                            desenvolvedora={jogo.Desenvolvedora}
                            descricao={jogo.Descricao}
                            imagem={JogoImg}
                        />
                        <div className={style.buttonsContainer}>
                            <button className={style.editButton}>Editar</button>
                            <button className={style.deleteButton} onClick={deletarJogo}>Excluir</button>
                        </div>
                    </div>
                </ContainerJogo>
            </section>
        </Container>
    );
};

export default DetailGame;