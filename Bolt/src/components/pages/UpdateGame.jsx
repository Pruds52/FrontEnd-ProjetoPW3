import React, { useState, useEffect } from "react";
import style from "./CreateGame.module.css";
import Input from "../forms/Input";
import Select from "../forms/Select";
import Button from "../forms/Button";
import { useParams } from "react-router-dom";

const UpdateGame = () => {
    const [generos, setGeneros] = useState([]);
    const [jogo, setJogo] = useState({});
    const { jogoId } = useParams();

    function handlerChangeJogo(event) {
        setJogo({ ...jogo, [event.target.name]: event.target.value });
    }

    function handleChangeGenero(event) {
        setJogo({ ...jogo, GeneroId: event.target.value });
    }

    useEffect(() => {
        fetch("http://localhost:3333/genero", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setGeneros(data);
            })
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        fetch(`http://localhost:3333/jogo/${jogoId}`, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                if (data[0]) {
                    setJogo(data[0]);
                }
            })
            .catch((err) => console.log(err));
    }, [jogoId]);

    function updateJogo(jogoId, jogo) {
        fetch(`http://localhost:3333/jogo/${jogoId}`, {
            method: "PUT",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(jogo),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data);
            })
            .catch((err) => console.log(err));
    }

    function submit(event) {
        event.preventDefault();
        updateJogo(jogoId, jogo);
    }

    return (
        <section className={style.create_game_container}>
            <div className={style.forms}>
                <h1>Atualizar Jogo</h1>
                <form onSubmit={submit}>
                    <Input
                        type="text"
                        name="JogoNome"
                        placeHolder="Digite o nome do jogo"
                        text="Título do jogo"
                        handlerChange={handlerChangeJogo}
                        value={jogo.JogoNome}
                    />

                    <Input
                        type="text"
                        name="Desenvolvedora"
                        placeHolder="Digite a desenvolvedora"
                        text="Desenvolvedora"
                        handlerChange={handlerChangeJogo}
                        value={jogo.Desenvolvedora}
                    />

                    <Input
                        type="text"
                        name="Descricao"
                        placeHolder="Digite a descrição do jogo"
                        text="Descrição do jogo"
                        handlerChange={handlerChangeJogo}
                        value={jogo.Descricao}
                    />

                    <Select
                        name="Genero"
                        text="Escolha um gênero de jogo"
                        options={generos}
                        handlerChangeGenero={handleChangeGenero}
                        value={jogo.GeneroId}
                    />

                    <Button rotulo="Salvar Alterações" />
                </form>
            </div>
        </section>
    );
};

export default UpdateGame;
