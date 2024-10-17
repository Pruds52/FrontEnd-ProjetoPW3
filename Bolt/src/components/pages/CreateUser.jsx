import React, { useState } from "react";
import style from "./CreateUser.module.css";
import Input from "../forms/Input";
import Select from "../forms/Select";
import Button from "../forms/Button"

const CreateGame = () => {
    const [user, setUser] = useState({})



    function handlerChangeUser(event) {
        setUser({ ...user, [event.target.name]: event.target.value });
    }

    function createUser(user) {

        console.log(JSON.stringify(user))

        fetch('http://localhost:3333/usuario', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*'
            },
            body: JSON.stringify(user)
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
        createUser(user);
    }


    return (
        <section className={style.create_user_container}>

            <div className={style.forms}>

                <h1>Cadastrar Usuário</h1>

                <form onSubmit={submit}>
                    <Input
                        type="text"
                        name="nome"
                        placeHolder="Digite seu nome"
                        text="Nome:"
                        handlerChangeUser={handlerChangeUser}
                    />

                    <Input
                        type="text"
                        name="email"
                        placeHolder="Digite seu email"
                        text="Email:"
                        handlerChangeUser={handlerChangeUser}

                    />

                    <Input
                        type="password"
                        name="senha"
                        placeHolder="Digite sua senha"
                        text="Senha:"
                        handlerChangeUser={handlerChangeUser}
                    />

                    <Input
                        type="date"
                        name="dataNascimento"
                        text="Data de Nascimento:"
                        handlerChangeUser={handlerChangeUser}
                    />

                    <Button
                        rotulo="Cadastrar Usuário"
                    />
                </form>

            </div>


        </section>
    );
};

export default CreateGame;
